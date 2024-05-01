"use client"

import UIThemeProvider from "./UIThemeProvider"
import Card from "./Card"

const UITheme = () => (
  <UIThemeProvider>
    <Card />
  </UIThemeProvider>
)

export default UITheme