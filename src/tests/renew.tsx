// example.jsx
import { h, Fragment } from '@/index';

const Jj = (props: { a: string }) => {
  return <li>count2: {props.a}</li>;
};

const Renew = (props: { a: string }) => {
  return (
    <Fragment>
      <Jj a="7" />
      <li>count1: {props.a}</li>
      <button>change</button>
    </Fragment>
  );
};

const jj = <Renew a="3" />;

console.log(jj);

// document.body.appendChild(<Renew a="3" />);
