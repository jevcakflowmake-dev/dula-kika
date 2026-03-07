'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  dueDate: string;
  consultType: string;
  packageInterest: string;
  location: string;
  message: string;
  gdpr: boolean;
};

const consultTypes = [
  { id: 'free-consult', label: '☕ Bezplatná konzultace (úvodní setkání)', price: 'Zdarma' },
  { id: 'workshop', label: '🎓 Porodní workshop pro páry', price: '4 799 Kč / pár' },
  { id: 'prenatal', label: '📚 Předporodní příprava', price: 'od 1 390 Kč' },
  { id: 'package', label: '📦 Zájem o balíček (proberu na konzultaci)', price: 'dle balíčku' },
];

const packages = [
  { id: 'last-minute', label: 'LAST MINUTE – 6 990 Kč' },
  { id: 'basic', label: 'BASIC – 15 990 Kč' },
  { id: 'standard', label: 'STANDARD – 19 990 Kč (nejoblíbenější)' },
  { id: 'comfort', label: 'COMFORT – 25 990 Kč' },
  { id: 'vip', label: 'VIP QUEEN – Individuálně' },
  { id: 'not-sure', label: 'Ještě nevím, chci se poradit' },
];

const availableTimes = [
  'Pondělí 10:00', 'Pondělí 13:00', 'Pondělí 16:00',
  'Úterý 10:00', 'Úterý 13:00', 'Úterý 16:00',
  'Středa 10:00', 'Středa 14:00',
  'Čtvrtek 10:00', 'Čtvrtek 13:00', 'Čtvrtek 16:00',
  'Pátek 10:00', 'Pátek 14:00',
  'Online – dle dohody',
];

export default function ReservationForm() {
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    dueDate: '',
    consultType: '',
    packageInterest: '',
    location: '',
    message: '',
    gdpr: false,
  });

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="soft-card p-10 text-center">
        <div className="text-6xl mb-5 float-anim inline-block">🌸</div>
        <h2 className="font-bold text-2xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>
          Hurá! Přijato!
        </h2>
        <p className="text-base mb-2" style={{ color: '#6b5b5b', lineHeight: 1.75 }}>
          Tvoje žádost dorazila. Ozvu se ti do 24 hodin v pracovní dny.
        </p>
        <p className="text-sm" style={{ color: '#9a8080' }}>
          Pokud zprávu nepřijde do konce dalšího pracovního dne, napiš mi přímo na{' '}
          <a href="mailto:dula.kikakoj@gmail.com" style={{ color: '#BF8585' }}>dula.kikakoj@gmail.com</a>
        </p>
      </div>
    );
  }

  return (
    <div className="soft-card overflow-hidden">
      {/* Progress bar */}
      <div style={{ height: 4, background: '#EDE3DB' }}>
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #BF8585, #C9A96E)',
            width: `${(step / 3) * 100}%`,
            transition: 'width 0.5s ease',
          }}
        />
      </div>

      <div className="p-8">
        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                style={{
                  background: s <= step ? 'linear-gradient(135deg, #BF8585, #9B6B6B)' : '#EDE3DB',
                  color: s <= step ? 'white' : '#BF8585',
                }}
              >
                {s < step ? '✓' : s}
              </div>
              <span className="text-xs hidden sm:block" style={{ color: s === step ? '#9B6B6B' : '#b0a0a0' }}>
                {s === 1 ? 'O tobě' : s === 2 ? 'Typ konzultace' : 'Termín & zpráva'}
              </span>
              {s < 3 && <div className="w-8 h-0.5 ml-1" style={{ background: '#EDE3DB' }} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* STEP 1: Personal info */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>
                Řekni mi o sobě
              </h2>
              <p className="text-sm mb-5" style={{ color: '#7a6a6a' }}>Základní informace, abych se mohla lépe připravit.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5a5a5a' }}>
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    className="soft-input"
                    placeholder="Jana Nováková"
                    value={formData.name}
                    onChange={e => updateField('name', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5a5a5a' }}>
                    Telefon (volitelné)
                  </label>
                  <input
                    type="tel"
                    className="soft-input"
                    placeholder="+420 123 456 789"
                    value={formData.phone}
                    onChange={e => updateField('phone', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#5a5a5a' }}>
                  E-mail *
                </label>
                <input
                  type="email"
                  className="soft-input"
                  placeholder="jana@email.cz"
                  value={formData.email}
                  onChange={e => updateField('email', e.target.value)}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5a5a5a' }}>
                    Předpokládaný termín porodu
                  </label>
                  <input
                    type="month"
                    className="soft-input"
                    value={formData.dueDate}
                    onChange={e => updateField('dueDate', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5a5a5a' }}>
                    Kde jsi? (Praha / Středočeský kraj)
                  </label>
                  <input
                    type="text"
                    className="soft-input"
                    placeholder="Praha 5, Beroun..."
                    value={formData.location}
                    onChange={e => updateField('location', e.target.value)}
                  />
                </div>
              </div>

              <button
                type="button"
                className="btn-primary w-full"
                onClick={handleNext}
                disabled={!formData.name || !formData.email}
                style={{ opacity: (!formData.name || !formData.email) ? 0.6 : 1 }}
              >
                Pokračovat →
              </button>
            </div>
          )}

          {/* STEP 2: Consultation type */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>
                O co máš zájem?
              </h2>
              <p className="text-sm mb-5" style={{ color: '#7a6a6a' }}>Vyber, jaký typ konzultace nebo služby tě zajímá.</p>

              <div className="space-y-3">
                {consultTypes.map((t) => (
                  <label
                    key={t.id}
                    className="radio-option cursor-pointer"
                    style={formData.consultType === t.id ? { borderColor: '#BF8585', background: 'rgba(191,133,133,0.07)' } : {}}
                  >
                    <input
                      type="radio"
                      name="consultType"
                      value={t.id}
                      checked={formData.consultType === t.id}
                      onChange={e => updateField('consultType', e.target.value)}
                      className="hidden"
                    />
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: formData.consultType === t.id ? '#BF8585' : '#d4a9a9' }}
                    >
                      {formData.consultType === t.id && (
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#BF8585' }} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium" style={{ color: '#3C3C3C' }}>{t.label}</div>
                    </div>
                    <div className="text-xs font-semibold flex-shrink-0" style={{ color: '#C9A96E' }}>{t.price}</div>
                  </label>
                ))}
              </div>

              {(formData.consultType === 'package' || formData.consultType === 'free-consult') && (
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#5a5a5a' }}>
                    Který balíček tě zajímá?
                  </label>
                  <select
                    className="soft-input"
                    value={formData.packageInterest}
                    onChange={e => updateField('packageInterest', e.target.value)}
                  >
                    <option value="">Vyber balíček...</option>
                    {packages.map(p => (
                      <option key={p.id} value={p.id}>{p.label}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex gap-3">
                <button type="button" className="btn-secondary flex-1" onClick={handleBack}>← Zpět</button>
                <button
                  type="button"
                  className="btn-primary flex-1"
                  onClick={handleNext}
                  disabled={!formData.consultType}
                  style={{ opacity: !formData.consultType ? 0.6 : 1 }}
                >
                  Pokračovat →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Time & message */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>
                Kdy se ti hodí?
              </h2>
              <p className="text-sm mb-5" style={{ color: '#7a6a6a' }}>Vyber preferovaný čas konzultace. Finální termín domluvíme e-mailem.</p>

              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: '#5a5a5a' }}>
                  Preferovaný čas *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className="p-2.5 rounded-xl text-xs font-medium transition-all text-center"
                      style={{
                        background: selectedTime === time ? 'linear-gradient(135deg, #BF8585, #9B6B6B)' : 'rgba(191,133,133,0.07)',
                        color: selectedTime === time ? 'white' : '#5a5a5a',
                        border: `1.5px solid ${selectedTime === time ? 'transparent' : 'rgba(191,133,133,0.2)'}`,
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#5a5a5a' }}>
                  Zpráva / dotaz (volitelné)
                </label>
                <textarea
                  className="soft-input"
                  rows={4}
                  placeholder="Napiš mi cokoli, co chceš, abych věděla předem – třeba v jakém jsi týdnu, jaké máš obavy, nebo co tě k hledání duly přivedlo..."
                  value={formData.message}
                  onChange={e => updateField('message', e.target.value)}
                  style={{ resize: 'vertical', minHeight: 100 }}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
                  style={{ borderColor: formData.gdpr ? '#BF8585' : '#d4a9a9', background: formData.gdpr ? '#BF8585' : 'transparent' }}
                  onClick={() => updateField('gdpr', !formData.gdpr)}
                >
                  {formData.gdpr && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="text-xs leading-relaxed" style={{ color: '#7a6a6a' }}>
                  Souhlasím se zpracováním osobních údajů pro účely odpovědi na mou poptávku a případné uzavření spolupráce dle{' '}
                  <a href="/ochrana-soukromi" className="underline" style={{ color: '#BF8585' }}>Zásad ochrany soukromí</a>. *
                </span>
              </label>

              <div className="flex gap-3">
                <button type="button" className="btn-secondary flex-1" onClick={handleBack}>← Zpět</button>
                <button
                  type="submit"
                  className="btn-primary flex-1"
                  disabled={!selectedTime || !formData.gdpr || loading}
                  style={{ opacity: (!selectedTime || !formData.gdpr) ? 0.6 : 1 }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.3" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                      Odesílám...
                    </span>
                  ) : (
                    '🌸 Odeslat žádost'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
