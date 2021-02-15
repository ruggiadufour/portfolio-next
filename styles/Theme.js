import constants from "./constants";
export default function Theme({ children }) {
  return (
    <>
      {children}
      <style jsx>{`
        :global(.color-text) {
          color: ${constants.colors.primary}!important;
        }
        :global(.color-text-2) {
          color: ${constants.colors.secondary}!important;
        }
        :global(.color-text-3) {
          color: ${constants.colors.third}!important;
        }
        :global(.color-text-dark-1) {
          color: ${constants.colors.background0}!important;
        }
        }
        :global(.color-text-dark-2) {
          color: ${constants.colors.background4}!important;
        }
        :global(.color-black-text) {
          color: rgb(13, 20, 27) !important;
        }
        :global(.background-color) {
          background-color: #17202ad2 !important;
        }
        :global(::selection) {
          color: black;
          background: ${constants.colors.third};
        }
        :global(::-webkit-scrollbar) {
          width: 12px;
          background-color: ${constants.colors.third};
        }
        :global(::-webkit-scrollbar-thumb) {
          border-radius: 3px;
          background-color: tomato;
        }
      `}</style>
    </>
  );
}
