

const PageCover = ({img, title}) => {
    return (
        <div className="hero h-[400px]" style={{ backgroundImage: `url("${img}")`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
    </div>
  </div>
</div>
    );
};

export default PageCover;