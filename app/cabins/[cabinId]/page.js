import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateStaticParams() {
  const cabins = await getCabins();

  const staticList = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return staticList;
}

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name}`,
    description: `Cabin ${name}`,
  };
}

export const revalidate = 3600; // Revalidate the page every 60 seconds

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  // const { id, name, maxCapacity, regularPrice, discount, image, description } =
  //   cabin;
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
