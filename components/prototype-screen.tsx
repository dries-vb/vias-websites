import Image from "next/image";

type PrototypeScreenProps = {
  title: string;
  image: string;
};

export function PrototypeScreen({ title, image }: PrototypeScreenProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
      <h1 className="mb-4 text-2xl font-semibold">{title}</h1>
      <div className="overflow-hidden rounded border bg-white shadow-sm">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={3000}
          className="h-auto w-full"
          priority
        />
      </div>
    </main>
  );
}
