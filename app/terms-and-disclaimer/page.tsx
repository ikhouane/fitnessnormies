import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness and medical disclaimer",
  description: "Important information about using Steady Start's educational fitness and nutrition content.",
  alternates: { canonical: "/terms-and-disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <section className="simple-page section--white">
      <article className="narrow">
        <p className="eyebrow">Please read</p>
        <h1>Fitness and medical disclaimer</h1>
        <p>
          Steady Start provides general educational information about fitness, food, habits, and recovery. It is not medical advice, diagnosis, treatment, or a substitute for care from a qualified health professional.
        </p>
        <h2>Use your judgment and get personal advice when needed</h2>
        <p>
          Talk with a qualified clinician before beginning or changing an exercise or nutrition routine if you have an injury, chronic condition, chest pain, dizziness, are pregnant or recently postpartum, take medicines that affect exercise tolerance, or have been advised to limit physical activity.
        </p>
        <p>
          Stop activity and seek appropriate care if you experience chest pain, fainting, sudden severe pain, unusual shortness of breath, or any symptom that concerns you. Exercise information cannot account for your individual health history or circumstances.
        </p>
        <h2>No guarantees</h2>
        <p>
          Results vary. We do not promise particular changes in weight, appearance, strength, health, or performance. Choose changes that feel sustainable and work with qualified professionals for individualized support.
        </p>
      </article>
    </section>
  );
}
