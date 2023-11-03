import React from "react";
import {Tabs, Tab, Card, CardBody, Chip} from "@nextui-org/react";
export default function Experience() {
  return (
    <section id='experience' className='my-20'>
      <div className='experience--content'>
        <p className='mb-3'>
          <strong>02 - Experience</strong>
        </p>
        <div>
          <h2 className='h1 max-w-[24em] mb-8'>
            Leveling Up
            {/* As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native
            apps. */}
          </h2>
        </div>
      </div>

      <div className='flex w-full flex-col text-[1rem]'>
        <Tabs
          aria-label='Options'
          color='primary'
          variant='underlined'
          classNames={{
            tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
            cursor: 'w-full bg-[#22d3ee]',
            tab: 'max-w-fit px-0 h-12',
            tabContent: 'group-data-[selected=true]:text-[#06b6d4]',
          }}
        >
          <Tab
            key='photos'
            title={
              <div className='flex items-center space-x-2'>
                <span>Photos</span>
                {/* <Chip size="sm" variant="faded">9</Chip> */}
              </div>
            }
          >
            <Card>
              <CardBody>
                1Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key='music'
            title={
              <div className='flex items-center space-x-2'>
                <span>Music</span>
                {/* <Chip size="sm" variant="faded">3</Chip> */}
              </div>
            }
          >
            <Card>
              <CardBody>
                2Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key='videos'
            title={
              <div className='flex items-center space-x-2'>
                <span>Videos</span>
                {/* <Chip size="sm" variant="faded">1</Chip> */}
              </div>
            }
          >
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </section>
  )
}