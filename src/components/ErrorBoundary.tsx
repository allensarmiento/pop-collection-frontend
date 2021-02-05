import { Component } from 'react';

type ErrorBoundaryProps = {
  children: JSX.Element;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong.</h3>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
