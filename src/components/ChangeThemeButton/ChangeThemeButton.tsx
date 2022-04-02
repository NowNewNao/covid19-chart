import React, { FC, useEffect, useState } from 'react';
import { useTheme } from 'next-themes'

const ChangeThemeButton:FC = () => {
     const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  return (
    <>
      <div
        aria-label="DarkModeToggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && <>{theme === 'dark' ? <span>🌝</span> : <span>🌚</span>}</>}
      </div>
    </>
  )
}

export { ChangeThemeButton }
