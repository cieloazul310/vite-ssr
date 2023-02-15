import type { FilledContext, HelmetDatum } from 'react-helmet-async';

function isHelmetContext(
  context: FilledContext | {}
): context is FilledContext {
  return Object.prototype.hasOwnProperty.call(context, 'helmet');
}

function helmetToString(context: FilledContext | {}) {
  if (!isHelmetContext(context)) return '';
  const { helmet } = context;
  return (Object.values(helmet) as HelmetDatum[])
    .map(({ toString }) => toString())
    .filter((str) => str !== '')
    .join('');
}

export default helmetToString;
