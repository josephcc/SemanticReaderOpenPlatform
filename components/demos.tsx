import Demo, { PillType } from "./demo";

export default function Demos() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-9">
            <h2 className="h2 mb-4">Research Prototype Showcase</h2>
            <p className="text-xl text-gray-600">Here we present several interactive demos to showcase systems you can build with PaperMage and the ComponentLibrary.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            <Demo title="LLM Paper QA" subtitle="A GPT-powered PDF QA system with attribution support." pillTypes={[PillType.DEMO, PillType.SNIPPET]} people={[
              {name: 'Joseph Chee Chang', image: '/images/people/joseph.jpg'},
              {name: 'Luca Soldaini', image: '/images/people/luca.jpg'},
            ]}/>

            <Demo title="PaperPlain" subtitle="Making Medical Research Papers Approachable to Healthcare Consumers" pillTypes={[PillType.VIDEO, PillType.PAPER]} people={[{name: 'Tal August', image: '/images/people/tal.jpg'}]}/>


            <Demo title="Papeos" subtitle="Augmenting Research Papers with Author Talk Videos" pillTypes={[PillType.DEMO, PillType.SOURCE, PillType.PAPER]} />

            <Demo title="CiteSee" subtitle="Augmenting Citations in Papers with Persistent and Personalized Context" pillTypes={[PillType.VIDEO, PillType.PRODUCT, PillType.PAPER]}
              people={[
                { name: 'Joseph Chee Chang', image: '/images/people/joseph.jpg' },
              ]}

            />

            <Demo title="Scim" subtitle="Automatic highlights for skimming support of scientific papers" pillTypes={[PillType.PRODUCT, PillType.SNIPPET, PillType.PAPER]} people={[{name: 'Raymond Fok', image: '/images/people/ray.jpg'}]}/>

            <Demo title="ScholarPhi" subtitle="Augmenting Papers with Just-in-Time Definitions of Terms and Symbols" pillTypes={[PillType.SOURCE, PillType.VIDEO, PillType.PAPER]} people={[{name: 'Andrew Head', image: '/images/people/andrew.jpg'}, {name: 'Kyle Lo', image: '/images/people/kyle.jpg'}]}/>


          </div>

        </div>
      </div>
    </section>
  )
}