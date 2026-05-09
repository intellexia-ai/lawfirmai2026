import { useEffect, useRef, useState } from 'react';
import { useInView } from '../../hooks/useInView';

const stats = [
  { value: 100, suffix: '%', label: 'Confidentiality' },
  { value: 1800, suffix: '+', label: 'Trusted Clients' },
  { value: 95, suffix: '%', label: 'Successful Cases' },
  { value: 2999, suffix: '+', label: 'Registered Cases' },
];

const useCountUp = (target: number, active: boolean, duration = 1800) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
};

const StatItem = ({ value, suffix, label, active }: typeof stats[0] & { active: boolean }) => {
  const count = useCountUp(value, active);
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-serif text-white font-light">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-white/70 text-sm mt-2 tracking-widest uppercase">{label}</p>
    </div>
  );
};

export const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="bg-[#3A7A8A] py-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} active={inView} />
        ))}
      </div>
    </section>
  );
};
