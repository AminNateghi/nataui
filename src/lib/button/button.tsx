interface Props {
  label: string;
}

export const Button = ({ label }: Props) => {
  return (
    <div>
      {label}
    </div>
  );
};
