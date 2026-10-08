export default function Layout({ children }) {
  return (
    <div>
      <div>Custom header</div>
      {children}
    </div>
  );
}
