import { BsCurrencyDollar } from "react-icons/bs"
import { GoDotFill } from "react-icons/go"

import { StackedChart, PieChart, Button, SparkLineChart } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from "../data/dummy"

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 h-52 min-w-[320px] lg:w-80 lg:bg-contain
          rounded-xl w-full m-3 bg-hero-pattern bg-no-repeat bg-right-top drop-shadow-sm relative lg:basis-1/4">
          <div class="absolute inset-0 backdrop-filter backdrop-blur-[1px]"></div>
          <div className="absolute p-8 pt-9 inset-0 z-10">
            <div>
              <p className="text-gray-400">Earnings</p>
              <p className="text-2xl">$45.233,23</p>
            </div>
            <div className="mt-6">
              <Button
                color="white"
                bgColor="blue"
                text="Download"
                borderRadius="10px"
                size="medium"
              />
            </div>
          </div>
        </div>
        <div className="m-3 flex lg:basis-1/4 flex-auto flex-wrap justify-center gap-1">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl drop-shadow-sm flex-auto"
            >
              <button type="button" className="text-2xl opacity-70 hover:opacity-100 rounded-full p-4" style={{ color: item.iconColor, backgroundColor: item.iconBg }}>
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-xl font-semibold">{item.amount}</span>
                <span className={`text-sm ml-2 ${item.pcColor}`}>{item.percentage}</span>
              </p>
              <p className="mt-2 text-gray-400 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex lg:basis-1/2 flex-wrap gap-10 justify-center md:w-full">
          <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 p-4 rounded-2xl md:w-full drop-shadow-sm">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Revenue Updates</p>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600"><span><GoDotFill /></span><span>Expense</span></p>
                <p className="flex items-center gap-2 text-green-400"><span><GoDotFill /></span><span>Budget</span></p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              <div className="lg:border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$93.573</span>
                    <span className="ml-3 p-1.5 bg-green-400 rounded-full text-white text-xs hover:drop-shadow-xl cursor-pointer">23%</span>
                  </p>
                  <p className="text-gray-500 m-1">Budget</p>
                </div>
                <div className="mt-8">
                  <p>
                    <span className="text-3xl font-semibold">$53.573</span>
                  </p>
                  <p className="text-gray-500 m-1">Expense</p>
                </div>
                <div className="mt-5">
                  {/* <SparkLineChart 
                    currentColor="blue"
                    color="blue"
                    id="sparkline"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                  /> */}
                </div>
                <div className="mt-10">
                  <Button
                    color="white"
                    bgColor="blue"
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
              <div>
                <StackedChart 
                  width="320px"
                  height="360px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce