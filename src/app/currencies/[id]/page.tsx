import HeaderDesktop from "@/(Components)/HeaderDesktop/HeaderDesktop";
import CurrencyHero from "@/(Components)/CurrencyHero/CurrencyHero";
import CurrencyDialogWrapper from "@/(Components)/CurrencyWrapper/CurrencyWrapper";
import { coinService } from "@/(repositories)/services/coin.service";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;

  const response = await coinService.getCoinById(id);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: response.name,
    openGraph: {
      images: [`${response.image}`],
    },
  };
}
interface ParamsInputView {
  id: string;
}
export type ParamsInputPromise = { params: Promise<ParamsInputView> };

async function Page({ params }: ParamsInputPromise) {
  const { id } = await params;
  const coinData = await coinService.getCoinById(id);

  return (
    <div className="position-relative min-vh-100">
      <HeaderDesktop />
      <CurrencyDialogWrapper coinData={coinData} />
      <CurrencyHero />
    </div>
  );
}
export default Page;
