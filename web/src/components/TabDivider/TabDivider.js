const TabDivider = (props) => {
  const { color, pattern } = props
  return (
    <div
      className="bg-transparent relative z-10 -mt-6 md:-mt-12 flex px-wrap-1/2 -mx-wrap"
      aria-hidden="true"
    >
      <div
        className={`${'bg-' + color + ' '}${
          pattern ? 'bg-pattern ' : ''
        }h-6 md:h-12 w-full rounded-tl-full rounded-tr-full`}
      ></div>
    </div>
  )
}

export default TabDivider
