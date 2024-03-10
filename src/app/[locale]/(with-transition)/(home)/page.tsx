import { ListItem } from "@/components/ui";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t("HomePage.pageTitle"),
  };
}

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <section>
      <div className="container">
        <div className="mb-12">
          <h1 className="text-center text-3xl">
            Luck<span className="text-accent">ify</span>
          </h1>
        </div>
        <div className="max-w-[800px]">
          <h2 className="page-title">
            {t("title.main")}{" "}
            <span className="text-accent">{t("title.accent")}?</span>
          </h2>
          <ul className="flex flex-col gap-6 pl-12">
            {t.raw("infoList").map((info: any, infoIndex: number) => (
              <ListItem key={infoIndex}>{info.text}</ListItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
