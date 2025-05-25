'use client';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log('API response:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Unbekannter Fehler');
      }

      setEmail('');
      toast.success('Vielen Dank für Ihre Newsletter-Anmeldung!');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={'max-w-[250px]'}>
      <form className={'flex flex-col gap-y-3'} onSubmit={handleSubmit}>
        <p className={'font-bold'}>Newsletter</p>
        <p>Melde dich beim Newsletter an und erhalte immer die neusten Produkte sowie 5% Rabatt</p>
        <div className={'relative flex items-center justify-center'}>
          <input
            className={'w-full rounded-full border border-neutral-400 p-2'}
            type={'email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required={true}
            placeholder={'E-Mail'}
          />
          <button
            type={'submit'}
            className={'absolute right-1 cursor-pointer rounded-full p-1 transition-all duration-300 hover:bg-black/50'}
          >
            <ArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}
