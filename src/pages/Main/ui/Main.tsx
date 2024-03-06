import type React from 'react'
import { LayoutContainerCentered } from '@shared/ui/LayoutContainer'
import Layout from '@pages/Layout'
import { QuizCard } from '@shared/ui/QuizCard'

const Main: React.FC = () => {
  return (
    <Layout>
      <LayoutContainerCentered>
        <QuizCard
          question={{
            title: 'Theme',
            description:
              'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
          }}
        />
      </LayoutContainerCentered>
    </Layout>
  )
}

export default Main
