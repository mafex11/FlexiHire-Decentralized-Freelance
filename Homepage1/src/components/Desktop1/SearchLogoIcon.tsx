import { memo, SVGProps } from 'react';

const SearchLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <line
      y1={-0.5}
      x2={10.6239}
      y2={-0.5}
      transform='matrix(-0.643833 0.765166 -0.831344 -0.555758 6.83993 11)'
      stroke='black'
    />
    <circle cx={11.3} cy={6.5} r={6.5} stroke='black' />
  </svg>
);

const Memo = memo(SearchLogoIcon);
export { Memo as SearchLogoIcon };
