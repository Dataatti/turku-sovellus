export const IframeLink = ({ locale, height }: { locale: Lang, height?: number }) => {

  const heightAttribute = height ? {"data-height": `${height}px`} : {}

  return (
    <>
      <a data-testid="liikenne-tiedotteet-twitter" className="twitter-timeline" data-lang={locale} data-theme="light" {...heightAttribute} data-dtn="true" href="https://twitter.com/Turunliikenne?ref_src=twsrc%5Etfw">Loading...</a>
    </>
    )
}

export default IframeLink;
