type CarouselBoxProps = {
  position: number;
  children: React.ReactNode;
}

export default function CarouselBox({
  position, children,
}: CarouselBoxProps) {
  return (
    <li
      className="carousel__item"
      style={{ transform: `translateX(${position}%)` }}
    >
      {children}
    </li>
  );
}
