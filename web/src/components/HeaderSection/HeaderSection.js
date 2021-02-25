import TabDivider from 'src/components/TabDivider'

const HeaderSection = ({ title, subText, className, spacing, children }) => {
  return (
    <>
      <section
        className={`${className ? className + ' ' : ''}${
          spacing ? 'py-24 ' : 'py-32 '
        }-mx-wrap -mt-12 px-wrap bg-pattern`}
      >
        <header className="flex items-center justify-between gap-12 mb-4 md:mb-8">
          <div className="max-w-xl">
            <h1 className="text-5xl">{title}</h1>
            {subText && <p className="text-2xl mt-4">{subText}</p>}
          </div>
          {React.Children.count(children) > 0 && (
            <div className="flex-1 max-w-2xl">{children}</div>
          )}
        </header>
      </section>
      <TabDivider color="light" />
    </>
  )
}

export default HeaderSection
