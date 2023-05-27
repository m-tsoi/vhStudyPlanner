interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

function TestButton({ children, color = "primary", onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default TestButton;
