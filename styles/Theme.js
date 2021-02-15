import constants from "./constants";
import React, { useEffect, useState } from 'react'
//const { Provider, Consumer } = createContext({ theme: false });

export default function Theme({ children, settedTheme }) {
  const [theme, setTheme] = useState(settedTheme?constants.dark_theme:constants.light_theme)
  useEffect(()=>{
    setTheme(settedTheme?constants.dark_theme:constants.light_theme)
  },[settedTheme])

  return (
    <>
      {
        children
      }
      <style jsx>{`
        :global(.color-text) {
          color: ${theme.colors.primary}!important;
        }
        :global(.color-text-2) {
          color: ${theme.colors.secondary}!important;
        }
        :global(.color-text-3) {
          color: ${theme.colors.third}!important;
        }
        :global(.color-text-dark-1) {
          color: ${theme.colors.background0}!important;
        }
        }
        :global(.color-text-dark-2) {
          color: ${theme.colors.background4}!important;
        }
        :global(.color-black-text) {
          color: rgb(13, 20, 27) !important;
        }

        
        :global(.background-color) {
          background-color: #17202ad2 !important;
        }
        :global(.background-color1) {
          background-color: ${theme.colors.background3}!important;
        }
        :global(.background-color2) {
          background-color: ${theme.colors.backgroundsecondary}!important;
        }
        :global(.background-color3) {
          background-color: ${theme.colors.background4}!important;
        }
        :global(.background-color4) {
          background-color: ${theme.colors.background1}!important;
        }

        :global(nav a:hover){
          color: ${theme.colors.background3}!important;
          background: ${theme.colors.third}!important;
        }

        :global(::selection) {
          color: ${theme.colors.background3};
          background: ${theme.colors.third};
        }
        :global(::-webkit-scrollbar) {
          width: 12px;
          background-color: ${theme.colors.third};
        }
        :global(::-webkit-scrollbar-thumb) {
          border-radius: 3px;
          background-color: tomato;
        }
      `}</style>
    </>
  );
}
