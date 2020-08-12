import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default function UnrestTabs({ tabs }) {
  const titles = Object.keys(tabs)
  const contents = Object.values(tabs)
  return (
    <Tabs>
      <TabList>
        {titles.map((title, i) => (
          <Tab key={i}>{title}</Tab>
        ))}
      </TabList>

      {contents.map((content, i) => (
        <TabPanel key={i}>{content}</TabPanel>
      ))}
    </Tabs>
  )
}