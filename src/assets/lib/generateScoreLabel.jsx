export default function GenerateScoreLabel({ quantity }) {
  if (quantity >= 25) {
    return <span className="green">{quantity}</span>;
  } else quantity <= 25;
  return <span className="red">{quantity}</span>;
}
