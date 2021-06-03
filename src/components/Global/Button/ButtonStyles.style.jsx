import tw from 'tailwind-styled-components';

const ButtonStyles = tw.div`
  px-6
  py-2
  text-xl
  text-center
  transition-all
  duration-300
  ease-in-out
  border-2
  rounded-full
  text-primary
  border-primary
  hover:bg-primary_light
  hover:border-primary_light
  hover:text-primary
  md:text-1xl
  dark:border-secondary_light
  dark:text-secondary_light
  dark:hover:bg-secondary
  dark:hover:border-secondary
  dark:hover:text-secondary_dark

  ${({ $classStr }) => ($classStr ? $classStr : '')}
`;

export default ButtonStyles;
