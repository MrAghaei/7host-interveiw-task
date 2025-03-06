"use client";
import React, { useEffect, useState } from "react";
import CurrencyHero from "@/(Components)/CurrencyHero/CurrencyHero";
import CurrencyDialog from "@/(Components)/CurrencyDialog/CurrencyDialog";
import { useParams, useRouter } from "next/navigation";
import { useCoin } from "@/(repositories)/hooks/useCoin";
import Header from "@/(Components)/Header/Header";

// type Props = {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// };
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   const { id } = await params;
//
//   const response = await coinService.getCoinById(id);
//
//   const previousImages = (await parent).openGraph?.images || [];
//
//   return {
//     title: response.name,
//     openGraph: {
//       images: [`${response.image}`],
//     },
//   };
// }

function Page() {
  //region hooks
  const { fetchCoinById, coinData } = useCoin();
  const params = useParams<{ id: string }>();
  const [isDialogActive, setIsDialogActive] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => fetchCoinById(params.id);
    console.log(params);
    fetchData().then();
  }, []);
  //endregion

  //region functions
  function handleDialogClose(): void {
    setIsDialogActive(false);
    router.push("/currencies");
  }
  //endregion

  return (
    <div className="position-relative min-vh-100">
      <Header />
      <CurrencyDialog
        data={coinData}
        isActive={isDialogActive}
        handleDialogClose={handleDialogClose}
      />
      <CurrencyHero />
    </div>
  );
}

export default Page;
