import "./FloatingHearts.css";

export default function FloatingHearts() {
  return (
    <>
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          💚
        </div>
      ))}
    </>
  );
}