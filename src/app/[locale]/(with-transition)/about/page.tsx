import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t("AboutPage.pageTitle"),
  };
}

const About = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  return (
    <section>
      <div className="container">
        <div className="max-w-[600px]">
          <h2 className="page-title">
            {t("title.main")}{" "}
            <span className="text-accent">{t("title.accent")}.</span>
          </h2>
          <p>
            {t.rich("text", {
              accent: (chunks) => (
                <span className="font-bold text-blue-400">{chunks}</span>
              ),
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
