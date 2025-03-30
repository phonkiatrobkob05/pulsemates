function Card1({ title, description, text }) {
    return (
      <div className="bg-(--white) rounded-[19px] drop-shadow-md flex items-start justify-center">
        <div className="size-fit flex flex-col gap-[36px] items-center justify-center">
          <div className="bg-(--bg-our-values) w-[360px] h-[9px] rounded-[12px] flex items-center justify-center">
            <p
              className={`text-(--white) w-[192px] text-[${text}px] font-[Alatsi] font-normal text-center`}
            >
              {title}
            </p>
          </div>
          <p className="text-(--black) w-[200px] text-[16px] font-[Arapey] font-normal text-center">
            {description}
          </p>
        </div>
      </div>
    );
  }
  export default Card1;