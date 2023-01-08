/* eslint-disable prettier/prettier */
import Link from 'next/link';

type Props = React.ComponentPropsWithoutRef<'a'>;

const CustomLink = ({ href, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return <Link href={href} {...rest}></Link>;
  }

  if (isAnchorLink) {
    return <Link href={href} {...rest} />;
  }

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer"  {...rest} />
  );
};

export default CustomLink;
