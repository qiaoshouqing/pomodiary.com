export const seo = {
  title: 'POMODIARY | A company using AI to advance society',
  description:
    'POMODIARY, a company using AI to advance society, has one hundred applications that will either change society or simply change your life.',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://pomodiary.com'
      : 'http://localhost:3000'
  ),
} as const
