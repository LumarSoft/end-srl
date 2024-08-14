import OneServiceModule from "@/modules/Servicios/OneService";

export default async function OneServicePage({
  params,
}: {
  params: { serviceName: string };
}) {
  const data = await import(`@/shared/data/${params.serviceName}.json`).then(
    (res) => res.default
  );

  return <OneServiceModule data={data} />;
}
