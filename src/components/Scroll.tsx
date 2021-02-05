import Container from '@material-ui/core/Container';

type ScrollProps = {
  children: JSX.Element;
};

const Scroll = ({ children }: ScrollProps) => {
  return (
    <Container maxWidth="lg">
      {children}
    </Container>
  );
};

export default Scroll;
