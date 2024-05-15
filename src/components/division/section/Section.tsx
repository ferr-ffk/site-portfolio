interface Props {
  children: React.ReactNode | React.ReactNode[];
  id: string;
}

const Section = ({ children, id }: Props) => {
  return <section id={id}>{children}</section>;
};

export default Section;
