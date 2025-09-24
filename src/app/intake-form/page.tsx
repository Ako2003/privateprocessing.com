// app/intake/page.tsx
import MerchantIntakeForm from "@/components/intake-form/MerchantIntakeForm";

export default function IntakePage() {
    return (
        <main className="min-h-screen pt-25">
            <div className="mx-auto max-w-5xl w-11/12">
                <MerchantIntakeForm />
            </div>
        </main>
    );
}
