import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createReservation } from '../services/api';
import { ReservationData, FormStatus } from '../types';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Reservation: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationData>();

  const onSubmit = async (data: ReservationData) => {
    setStatus(FormStatus.LOADING);
    try {
      await createReservation(data);
      setStatus(FormStatus.SUCCESS);
      reset();
    } catch (error) {
      setStatus(FormStatus.ERROR);
    }
  };

  return (
    <section id="reservation" className="section reservation-section">
      <div className="container reservation-container">
        <div className="reservation-card">
          {/* Decorative bar */}
          <div className="reservation-deco-line" />
          
          <div className="reservation-header">
            <h2 className="section-title">Tischreservierung</h2>
            <p className="reservation-text">
              Sichern Sie sich Ihren Platz im Seefeld. Wir freuen uns auf Sie.
            </p>
          </div>

          {status === FormStatus.SUCCESS ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="success-message"
            >
              <CheckCircle className="icon-success" />
              <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Vielen Dank!</h3>
              <p className="reservation-text">Ihre Reservierungsanfrage wurde erfolgreich gesendet.</p>
              <button 
                onClick={() => setStatus(FormStatus.IDLE)}
                className="btn-link"
              >
                Neue Reservierung
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    {...register("name", { required: "Name ist erforderlich" })}
                    className="form-input"
                    placeholder="Max Mustermann"
                  />
                  {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>
                
                <div className="form-group">
                  <label className="form-label">Telefon</label>
                  <input
                    {...register("phone", { required: "Telefonnummer ist erforderlich" })}
                    className="form-input"
                    placeholder="0123 456789"
                  />
                   {errors.phone && <span className="form-error">{errors.phone.message}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">E-Mail</label>
                  <input
                    type="email"
                    {...register("email", { required: "E-Mail ist erforderlich" })}
                    className="form-input"
                    placeholder="max@beispiel.de"
                  />
                  {errors.email && <span className="form-error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Personen</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    {...register("persons", { required: true, min: 1 })}
                    className="form-input"
                    defaultValue={2}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Datum</label>
                  <input
                    type="date"
                    {...register("date", { required: "Datum ist erforderlich" })}
                    className="form-input"
                  />
                  {errors.date && <span className="form-error">{errors.date.message}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Uhrzeit</label>
                  <input
                    type="time"
                    {...register("time", { required: "Uhrzeit ist erforderlich" })}
                    className="form-input"
                  />
                  {errors.time && <span className="form-error">{errors.time.message}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Nachricht (Optional)</label>
                <textarea
                  {...register("message")}
                  rows={3}
                  className="form-textarea"
                  placeholder="Besondere Wünsche, Allergien..."
                />
              </div>

              {status === FormStatus.ERROR && (
                <div className="error-alert">
                  <AlertCircle style={{ marginRight: '0.5rem' }} size={20} />
                  <span>Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === FormStatus.LOADING}
                className="btn-submit"
              >
                {status === FormStatus.LOADING ? (
                  <>
                    <Loader2 className="spinner" />
                    Wird gesendet...
                  </>
                ) : (
                  'JETZT RESERVIEREN'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;