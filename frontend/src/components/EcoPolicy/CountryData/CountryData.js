const countryData = {
    "India": {
      name: "India",
      details: "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by land area, the second-most populous country, and the most populous democracy in the world.",
      carouselImages: [
        'https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0', 
        'https://www.hindustantimes.com/ht-img/img/2024/01/22/1600x900/PTI01-21-2024-RPT355A-0_1705843796443_1705892588810.jpg', 
        'https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg',],
      epiValue: 27.6,
      capitalCity: "Delhi",
      capitalDescription: "New Delhi is the capital of India and serves as the center of the Indian government. It is known for its rich history, cultural heritage, and as a hub of politics, culture, and commerce.",
      backgroundImage: "https://i.pinimg.com/originals/80/a4/09/80a4092e54052bf1b7e65d3e371160b3.jpg",
      population: 12345678,
      populationGrowth: {
        chartLabels: ['12-01-2022',
    '01-01-2023',
    '02-01-2023',],
        chartData: [1.2, 1.5, 2.0]
      },
      areaData: 1500000000,
      environmentalPolicyOverview: "India's environmental policy focuses on sustainability, climate change mitigation, and the protection of natural resources, while balancing economic growth and environmental protection.",
      airQualityIndex: {
        value: 75,
        chartLabels: ['12-01-2022',
          '01-01-2023',
          '02-01-2023',],
        chartData: [70, 75, 80]
      },
      waterQualityIndex: {
        value: 85,
        chartLabels: ['12-01-2022',
          '01-01-2023',
          '02-01-2023',],
        chartData: [80, 85, 90]
      },
      deforestationRate: {
        value: 3.5,
        chartLabels: ["2019", "2020", "2021"],
        chartData: [2.5, 3.0, 3.5]
      },
      biodiversityScore: {
        value: 0.8,
        chartLabels: ['12-01-2022',
          '01-01-2023',
          '02-01-2023',],
        chartData: [0.7, 0.75, 0.8]
      },
      recyclingRate: {
        value: 60,
        chartLabels: ['12-01-2022',
    '01-01-2023',
    '02-01-2023',],
        chartData: [55, 58, 60]
      },
      timelineEvents: [
        {
          title: 'India Launches International Solar Alliance (ISA)',
          body: 'In 2016, India launched the International Solar Alliance (ISA), a coalition of solar-rich countries to promote solar energy and reduce the cost of solar power.'
        },
        {
          title: 'National Clean Air Programme (NCAP) Launched',
          body: 'In 2017, India launched the National Clean Air Programme (NCAP) to improve air quality in cities and reduce particulate matter concentrations by 20-30% by 2024.'
        },
        {
          title: 'India’s Electric Mobility Vision Announced',
          body: 'In 2018, India unveiled its vision for electric mobility, aiming to have 30% of all vehicles electric by 2030 to reduce carbon emissions and air pollution.'
        },
        {
          title: 'India’s Long-Term Low-Emission Development Strategy',
          body: 'In 2019, India unveiled its Long-Term Low-Emission Development Strategy to achieve a cleaner and more sustainable energy future, focusing on renewable energy and clean technologies.'
        },
        {
          title: 'India Pledges Net-Zero Emissions by 2070',
          body: 'In 2020, at the COP26 summit, India pledged to achieve net-zero carbon emissions by 2070 and outlined ambitious renewable energy targets to combat climate change.'
        },
        {
          title: 'India Updates National Action Plan on Climate Change (NAPCC)',
          body: 'In 2020, India undertook a major update of its National Action Plan on Climate Change (NAPCC) to align with its 2030 climate targets, including energy-efficient technologies and sustainable agriculture.'
        },
        {
          title: 'Climate-Resilient Agriculture Initiatives Launched',
          body: 'In 2020, India launched programs focused on climate-resilient agriculture, including drought-resistant crops, rainwater harvesting, and sustainable farming practices.'
        },
        {
          title: 'India’s Forest Conservation Efforts Strengthened',
          body: 'In 2020, India focused on increasing forest cover and biodiversity through the Green India Mission, with an emphasis on afforestation, reforestation, and ecological restoration.'
        },
        {
          title: 'India Announces Net-Zero Emissions Target by 2070 at COP26',
          body: 'At the 2021 COP26 summit, India formally announced its target of achieving net-zero carbon emissions by 2070, marking a major milestone in its climate strategy.'
        },
        {
          title: 'India’s Hydrogen Mission Launched',
          body: 'In 2022, India launched its Hydrogen Mission, aiming to become a leader in clean hydrogen production and leverage renewable energy for hydrogen production.'
        },
        {
          title: 'India’s National Biofuels Policy Introduced',
          body: 'In 2022, India introduced the National Biofuels Policy to promote the use of ethanol, biodiesel, and other biofuels to reduce dependence on fossil fuels and curb emissions.'
        },
        {
          title: 'India Surpasses 100 GW of Solar Power Capacity',
          body: 'In 2022, India achieved 100 GW of installed solar power capacity, fulfilling one of its significant renewable energy commitments.'
        },
        {
          title: 'India’s Green Rating for Integrated Habitat Assessment (GRIHA) Enhanced',
          body: 'In 2022, India strengthened its Green Rating for Integrated Habitat Assessment (GRIHA) system to promote energy efficiency and sustainability in urban spaces.'
        },
        {
          title: 'India Achieves 175 GW of Renewable Energy Capacity',
          body: 'In 2023, India surpassed a total renewable energy capacity of 175 GW, moving closer to its goal of 500 GW of renewable energy capacity by 2030.'
        },
        {
          title: 'India Focuses on Battery Storage Solutions for Renewable Energy',
          body: 'In 2023, India increased efforts to scale up battery storage solutions, enhancing the reliability and scalability of renewable energy sources.'
        },
        {
          title: 'India Adopts Sustainable Finance Roadmap',
          body: 'In 2023, India adopted a sustainable finance roadmap to finance green projects, incentivize sustainable business practices, and promote green bonds.'
        }
      ],      
      defaultCardData: {
        "ClimateChangeMitigation": [
                { 
                  title: "National Action Plan on Climate Change (NAPCC)", 
                  description: "A comprehensive strategy to address climate change through eight national missions: Solar Energy, Energy Efficiency, Sustainable Habitat, Water Conservation, Sustainable Agriculture, Green India, and Strategic Knowledge.", 
                  link: "https://www.india.gov.in/spotlight/national-action-plan-climate-change-napcc" 
                },
                { 
                  title: "Perform, Achieve, and Trade (PAT) Scheme", 
                  description: "A market-based mechanism that enhances energy efficiency in energy-intensive industries and promotes the reduction of carbon emissions.", 
                  link: "https://beeindia.gov.in/content/pat-scheme" 
                },
                { 
                  title: "Faster Adoption and Manufacturing of Hybrid and Electric Vehicles (FAME)", 
                  description: "A scheme to incentivize the adoption of electric and hybrid vehicles in India, aimed at reducing vehicular emissions and promoting cleaner transport.", 
                  link: "https://www.niti.gov.in/initiatives/fame-india-scheme" 
                },
                { 
                  title: "National Electric Mobility Mission Plan (NEMMP)", 
                  description: "Aimed at promoting the manufacturing of electric vehicles (EVs) in India and providing financial incentives to manufacturers and buyers.", 
                  link: "https://www.industry.gov.au/data-and-publications/national-electric-mobility-mission-plan-2020" 
                },
                { 
                  title: "Pradhan Mantri Ujjwala Yojana (PMUY)", 
                  description: "A scheme launched to provide LPG connections to women from Below Poverty Line (BPL) households, reducing dependence on biomass for cooking and thus mitigating deforestation and air pollution.", 
                  link: "https://pmuy.gov.in/" 
                },
                { 
                  title: "Atal Mission for Rejuvenation and Urban Transformation (AMRUT)", 
                  description: "A scheme aimed at ensuring basic infrastructure services in cities, with a focus on waste management, water supply, and sustainable urban development.", 
                  link: "https://amrut.gov.in/" 
                },
                { 
                  title: "Swachh Bharat Abhiyan (Clean India Mission)", 
                  description: "Launched to improve sanitation and reduce open defecation. It promotes waste management, recycling, and a clean environment.", 
                  link: "https://swachhbharatmission.gov.in/" 
                },
                { 
                  title: "Faster Adoption and Manufacturing of Hybrid and Electric Vehicles (FAME India Phase II)", 
                  description: "A continuation of the FAME scheme, this phase aims to increase the adoption of electric vehicles, including buses, and strengthen the EV infrastructure in the country.", 
                  link: "https://www.industry.gov.au/initiatives-and-programs/fame-india" 
                },
                { 
                  title: "Green India Mission", 
                  description: "Aims to increase forest and tree cover, restore degraded ecosystems, and enhance biodiversity conservation efforts.", 
                  link: "https://www.moef.gov.in/green-india-mission/" 
                },
                { 
                  title: "National Biofuels Policy", 
                  description: "Focuses on promoting the use of ethanol, biodiesel, and other biofuels to reduce carbon emissions and dependence on fossil fuels.", 
                  link: "https://www.mnre.gov.in" 
                },
                { 
                  title: "State Action Plans on Climate Change (SAPCC)", 
                  description: "Each state in India is required to develop its own action plan to address the impacts of climate change, in alignment with NAPCC.", 
                  link: "https://www.moef.gov.in/sapcc/" 
                },
                { 
                  title: "Waste to Wealth Mission", 
                  description: "Aims to convert waste into energy and other useful products, thus promoting the circular economy and reducing landfill waste.", 
                  link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1580130" 
                },
                { 
                  title: "National Adaptation Fund for Climate Change (NAFCC)", 
                  description: "Provides financial assistance to states and Union Territories to implement projects that address the adverse impacts of climate change.", 
                  link: "https://www.moes.gov.in/nafcc" 
                }
            ],
        "BiodiversityandConservation": [
            { 
                title: "National Biodiversity Action Plan (NBAP)", 
                description: "A framework to protect India’s biodiversity, ensure conservation, and sustainable use of its biological resources, with a focus on reducing threats to biodiversity.", 
                link: "https://www.moef.gov.in/national-biodiversity-action-plan/" 
              },
              { 
                title: "Wildlife Protection Act, 1972", 
                description: "An Act aimed at providing for the protection of wild animals and birds and safeguarding their habitats, to conserve biodiversity in India.", 
                link: "https://www.indiacode.nic.in/bitstream/123456789/1320/1/wildlife_protection_act_1972.pdf" 
              },
              { 
                title: "Project Tiger", 
                description: "A major wildlife conservation initiative to protect the Bengal tiger species in India, with dedicated reserves and protection mechanisms.", 
                link: "https://www.projecttiger.gov.in/" 
              },
              { 
                title: "Project Elephant", 
                description: "Aimed at conserving and protecting the Asian elephant population and ensuring the preservation of their habitats in India.", 
                link: "https://www.projectelephant.gov.in/" 
              },
              { 
                title: "Wetland Conservation Programme", 
                description: "Promotes the conservation and sustainable use of wetlands across India, through awareness, policy frameworks, and action plans.", 
                link: "https://www.moef.gov.in/wetlands-conservation/" 
              },
              { 
                title: "National Wildlife Action Plan (2017-2031)", 
                description: "A comprehensive action plan to safeguard India's wildlife and habitats through management, research, and sustainable development initiatives.", 
                link: "https://www.moef.gov.in/national-wildlife-action-plan/" 
              },
              { 
                title: "Biosphere Reserves", 
                description: "Designated areas aimed at conserving biodiversity, landscapes, and ecosystems, focusing on the integration of conservation with sustainable development.", 
                link: "https://www.moef.gov.in/biosphere-reserves/" 
              },
              { 
                title: "National River Conservation Plan (NRCP)", 
                description: "Aims to conserve the rivers of India by reducing pollution, preserving ecosystems, and providing sustainable management.", 
                link: "https://www.nmcg.nic.in/" 
              },
              { 
                title: "Afforestation and Reforestation Programs", 
                description: "Promotes the restoration of degraded lands through tree planting and reforestation, helping in biodiversity conservation and carbon sequestration.", 
                link: "https://www.naf.cc/" 
              },
              { 
                title: "Sustainable Development Goals (SDGs) for Biodiversity", 
                description: "India is committed to achieving the UN SDGs, including Goal 15 (Life on Land), which focuses on biodiversity conservation and ecosystem protection.", 
                link: "https://www.un.org/sustainabledevelopment/biodiversity/" 
              },
              { 
                title: "National Green Tribunal (NGT)", 
                description: "A specialized body for effective and expeditious disposal of cases related to environmental protection and conservation, including biodiversity.", 
                link: "https://www.greentribunal.gov.in/" 
              },
              { 
                title: "Conservation of Marine Biodiversity", 
                description: "Focused on protecting marine life, ecosystems, and coastal resources, India has several initiatives aimed at marine biodiversity conservation.", 
                link: "https://www.moes.gov.in/marine-biodiversity" 
              },
              { 
                title: "Eco-Sensitive Zones (ESZ)", 
                description: "Areas around protected areas that are sensitive to ecological changes, with restrictions on industrial activities to protect biodiversity.", 
                link: "https://www.moef.gov.in/ecosensitive-zones/" 
              }
        ],
        "RenewableEnergyAndClean" : [
            { 
              title: "National Solar Mission", 
              description: "Aims to promote the development and use of solar energy for power generation, focusing on increasing the share of solar energy in India’s energy mix.", 
              link: "https://mnre.gov.in/solar" 
            },
            { 
              title: "Atal Mission for Rejuvenation and Urban Transformation (AMRUT)", 
              description: "Supports the development of renewable energy solutions in urban areas, including sustainable water supply and waste management systems.", 
              link: "https://amrut.gov.in/" 
            },
            { 
              title: "Pradhan Mantri Ujjwala Yojana (PMUY)", 
              description: "Aims to provide clean cooking fuel (LPG) to rural households, replacing the use of wood and kerosene, thus reducing environmental pollution.", 
              link: "https://www.pmuy.gov.in/" 
            },
            { 
              title: "National Wind-Solar Hybrid Policy", 
              description: "Promotes the hybridization of solar and wind energy, enhancing energy security and reducing the environmental footprint of energy generation.", 
              link: "https://mnre.gov.in/wind-solar-hybrid" 
            },
            { 
              title: "Faster Adoption and Manufacturing of Hybrid and Electric Vehicles (FAME)", 
              description: "Encourages the adoption of electric and hybrid vehicles in India, contributing to a cleaner and more sustainable transport sector.", 
              link: "https://www.fame-india.gov.in/" 
            },
            { 
              title: "Ujjwala 2.0 Scheme", 
              description: "Expands on the Ujjwala Yojana to provide LPG connections to marginalized and economically weaker sections, improving energy access and promoting cleaner energy.", 
              link: "https://www.pmuy.gov.in/" 
            },
            { 
              title: "State Action Plan on Climate Change (SAPCC)", 
              description: "Provides a framework for states to address climate change through renewable energy, clean technologies, and sustainable development practices.", 
              link: "https://www.moef.gov.in/sapcc/" 
            },
            { 
              title: "Perform, Achieve and Trade (PAT) Scheme", 
              description: "A market-based mechanism that encourages energy efficiency improvements in energy-intensive industries, contributing to reducing carbon emissions.", 
              link: "https://www.beeindia.gov.in/" 
            },
            { 
              title: "National Biofuels Policy", 
              description: "Encourages the use of biofuels (ethanol, biodiesel, and bio-CNG) as alternatives to fossil fuels, aiming to reduce carbon emissions and promote sustainable energy.", 
              link: "https://www.mnre.gov.in/biofuels" 
            },
            { 
              title: "Electricity Act, 2003 - Renewable Energy Focus", 
              description: "Amends the Electricity Act to encourage the use of renewable energy sources in power generation and transmission systems, facilitating cleaner electricity production.", 
              link: "https://www.indiacode.nic.in/bitstream/123456789/3667/1/ea_2003.pdf" 
            },
            { 
              title: "Smart Cities Mission", 
              description: "Promotes the use of renewable energy technologies in urban infrastructure, including solar power and energy-efficient building practices.", 
              link: "https://smartcities.gov.in/" 
            },
            { 
              title: "International Solar Alliance (ISA)", 
              description: "A coalition of solar-rich countries aimed at promoting solar energy and enabling sustainable development through solar power.", 
              link: "https://isolaralliance.org/" 
            },
            { 
              title: "National Electric Mobility Mission Plan (NEMMP)", 
              description: "Supports the development of electric vehicles and charging infrastructure, contributing to a cleaner and more sustainable transportation ecosystem.", 
              link: "https://www.nemmp.gov.in/" 
            },
            { 
              title: "Sustainable Alternative Towards Affordable Transportation (SATAT)", 
              description: "Aims to promote the production and use of compressed bio-gas (CBG) as an alternative fuel for the transport sector, reducing air pollution.", 
              link: "https://www.satat.co.in/" 
            },
        ],
            "GreenFinance" :[
                { 
                  title: "National Clean Energy Fund (NCEF)", 
                  description: "A fund created for promoting clean energy projects, financing research and development in clean energy technologies, and reducing environmental pollution.", 
                  link: "https://www.ncef.gov.in/" 
                },
                { 
                  title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)", 
                  description: "Though primarily a financial inclusion program, it indirectly supports green finance by enabling financial access to marginalized communities for sustainable development initiatives.", 
                  link: "https://pmjdy.gov.in/" 
                },
                { 
                  title: "Green Bonds", 
                  description: "The issuance of Green Bonds helps raise funds specifically for financing climate-related projects, such as renewable energy, energy efficiency, and sustainable infrastructure.", 
                  link: "https://www.sebi.gov.in/sebiweb/home/detail/1214104291629" 
                },
                { 
                  title: "National Bank for Agriculture and Rural Development (NABARD) - Green Financing", 
                  description: "NABARD provides financing for sustainable agriculture practices, renewable energy projects, and climate-resilient infrastructure development in rural areas.", 
                  link: "https://www.nabard.org/" 
                },
                { 
                  title: "State Bank of India (SBI) - Green and Sustainable Finance", 
                  description: "SBI promotes financing for green projects, including renewable energy, sustainable infrastructure, and climate resilience efforts, in line with national and international sustainability goals.", 
                  link: "https://www.sbi.co.in/web/green-and-sustainable-finance" 
                },
                { 
                  title: "India Renewable Energy Development Agency (IREDA) Financing", 
                  description: "IREDA provides financial support to renewable energy projects, including wind, solar, and hydro power generation, to promote clean and sustainable energy in India.", 
                  link: "https://www.ireda.in/" 
                },
                { 
                  title: "Fossil Fuel Subsidy Reform", 
                  description: "India is gradually reforming its fossil fuel subsidy regime to divert more resources towards renewable energy investments, thus fostering green finance.", 
                  link: "https://www.cseindia.org/fossil-fuel-subsidies" 
                },
                { 
                  title: "Atal Pension Yojana (APY) – Green Financing in Pension Plans", 
                  description: "This scheme promotes long-term investments, some of which are directed towards green energy projects, ensuring that pension funds contribute to sustainable development.", 
                  link: "https://www.npscra.nsdl.co.in/" 
                },
                { 
                  title: "Clean Energy Fund", 
                  description: "This fund finances clean energy technologies, sustainable infrastructure, and initiatives aimed at reducing carbon footprints and mitigating climate change.", 
                  link: "https://www.moef.gov.in/" 
                },
                { 
                  title: "EESL (Energy Efficiency Services Ltd.) Financing", 
                  description: "EESL helps finance energy-efficient projects, including LED lighting, energy management systems, and electric vehicle infrastructure, all aimed at reducing energy consumption and emissions.", 
                  link: "https://www.eeslindia.org/" 
                },
                { 
                  title: "Green Taxation & Incentives", 
                  description: "A series of policies and incentives that promote green finance by imposing taxes on environmentally harmful practices and offering financial rewards for green projects.", 
                  link: "https://www.cbic.gov.in/" 
                },
                { 
                  title: "Corporate Social Responsibility (CSR) Green Projects", 
                  description: "Encourages corporations to invest in green initiatives such as renewable energy, energy efficiency, and sustainable environmental practices as part of their CSR programs.", 
                  link: "https://www.mca.gov.in/" 
                },
                { 
                  title: "Climate Change Adaptation Fund", 
                  description: "Funds that provide financial support for projects aimed at increasing resilience to climate change impacts, including renewable energy solutions, water management, and agriculture adaptation.", 
                  link: "https://www.moef.gov.in/" 
                },
                { 
                  title: "India Infrastructure Finance Company Limited (IIFCL) Green Financing", 
                  description: "IIFCL provides financing for sustainable infrastructure projects, including green buildings, renewable energy facilities, and other climate-resilient infrastructure.", 
                  link: "https://www.iifcl.in/" 
                },
          ],
          "EnvironmentalRegulationsAndPolicies" : [
            { 
              title: "Environment Protection Act, 1986", 
              description: "This Act provides a framework for the protection and improvement of the environment in India. It empowers the central government to take necessary measures to safeguard the environment, including setting standards for emissions and pollutants.", 
              link: "https://www.india.gov.in/official-website-ministry-environment-forest-and-climate-change" 
            },
            { 
              title: "The Air (Prevention and Control of Pollution) Act, 1981", 
              description: "This Act aims to control and reduce air pollution in India. It empowers authorities to set standards for air quality, control emissions, and establish pollution control measures for industries.", 
              link: "https://www.india.gov.in/official-website-ministry-environment-forest-and-climate-change" 
            },
            { 
              title: "The Water (Prevention and Control of Pollution) Act, 1974", 
              description: "This Act aims to control and reduce water pollution. It empowers the central and state pollution control boards to regulate water quality, set standards, and monitor industries discharging effluents into water bodies.", 
              link: "https://www.india.gov.in/official-website-ministry-environment-forest-and-climate-change" 
            },
            { 
              title: "National Green Tribunal (NGT) Act, 2010", 
              description: "This Act established the National Green Tribunal, a specialized judicial body to handle environmental matters. It addresses issues related to environmental protection, restoration, and compensation for damages caused by pollution.", 
              link: "https://www.greentribunal.gov.in/" 
            },
            { 
              title: "National Action Plan on Climate Change (NAPCC), 2008", 
              description: "A set of eight national missions aimed at addressing climate change and its impacts, including enhancing energy efficiency, promoting renewable energy, and sustainable water use.", 
              link: "https://www.india.gov.in/official-website-ministry-environment-forest-and-climate-change" 
            },
            { 
              title: "The Forest Conservation Act, 1980", 
              description: "This Act seeks to regulate the diversion of forest land for non-forest purposes and provides measures for the protection of forests and wildlife.", 
              link: "https://www.indiacode.nic.in/" 
            },
            { 
              title: "The Biological Diversity Act, 2002", 
              description: "This Act was created to conserve biological diversity, promote sustainable use of biological resources, and ensure fair and equitable sharing of benefits arising from the use of biological resources.", 
              link: "https://www.nbd.gov.in/" 
            },
            { 
              title: "The Hazardous Waste (Management, Handling and Transboundary Movement) Rules, 2008", 
              description: "These rules regulate the management, handling, and disposal of hazardous waste in India, aiming to minimize risks to human health and the environment.", 
              link: "https://www.india.gov.in/official-website-ministry-environment-forest-and-climate-change" 
            },
            { 
              title: "The Coastal Regulation Zone (CRZ) Notification", 
              description: "The CRZ Notification regulates development along India's coastline to ensure the protection of coastal ecosystems and biodiversity while allowing sustainable development.", 
              link: "https://www.moef.gov.in/legislation/" 
            },
            { 
              title: "The Environment Impact Assessment (EIA) Notification, 2006", 
              description: "The EIA Notification mandates that certain development projects undergo an environmental impact assessment to assess their potential impact on the environment before they are approved.", 
              link: "https://www.moef.gov.in/legislation/" 
            },
            { 
              title: "The Plastics Waste Management Rules, 2016", 
              description: "These rules aim to address the environmental impact of plastic waste by regulating the manufacturing, use, and disposal of plastic products and promoting the use of biodegradable alternatives.", 
              link: "https://www.india.gov.in/official-website-ministry-environment-forest-and-climate-change" 
            },
            { 
              title: "The Solid Waste Management Rules, 2016", 
              description: "These rules provide guidelines for the management, segregation, collection, and disposal of solid waste, aiming to reduce waste generation and promote recycling and composting.", 
              link: "https://www.india.gov.in/official-website-ministry-environment-forest-and-climate-change" 
            },
            { 
              title: "The National Green Tribunal (NGT) Act, 2010", 
              description: "The National Green Tribunal Act provides the framework for the creation of NGT, which has the mandate to handle environmental disputes and issues in India, including pollution control, environmental damage, and restoration.", 
              link: "https://www.greentribunal.gov.in/" 
            }
          ],
          "CarbonCreditsAndTrading" : [
            { 
              title: "Clean Development Mechanism (CDM)", 
              description: "Under the Kyoto Protocol, CDM allows industrialized countries to invest in emission reduction projects in developing countries to earn carbon credits. India is a significant participant in the CDM market, generating millions of carbon credits.", 
              link: "https://unfccc.int/clean-development-mechanism" 
            },
            { 
              title: "Perform, Achieve, and Trade (PAT) Scheme", 
              description: "The PAT Scheme is part of India's National Mission on Enhanced Energy Efficiency (NMEEE), under which energy-intensive industries are assigned targets for reducing energy consumption, and they can trade energy-saving certificates for compliance.", 
              link: "https://www.cea.nic.in/paenergy_trade" 
            },
            { 
              title: "National Carbon Market (India Carbon Market Initiative)", 
              description: "India is in the process of developing a national carbon market that aims to facilitate carbon credit trading within the country to reduce greenhouse gas emissions. It aims to support sustainable development while encouraging emission reductions.", 
              link: "https://www.india.gov.in/official-website-ministry-environment-forest-and-climate-change" 
            },
            { 
              title: "Carbon Credit Trading Platform by IEX", 
              description: "Indian Energy Exchange (IEX) offers a platform for carbon credit trading. This allows companies to buy and sell carbon credits, ensuring their compliance with emission reduction targets under various government schemes.", 
              link: "https://www.iexindia.com/" 
            },
            { 
              title: "India's Carbon Trading Policy and Regulations", 
              description: "India’s policies surrounding carbon trading are designed to incentivize emission reductions through a market-based approach. The country’s growing participation in global carbon markets contributes to achieving both national and international climate goals.", 
              link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1712399" 
            },
            { 
              title: "The Paris Agreement and Carbon Trading", 
              description: "Under the Paris Agreement, India is committed to reducing its carbon emissions intensity and has engaged in carbon credit mechanisms to achieve these targets. Carbon credit trading is part of the broader global efforts to mitigate climate change.", 
              link: "https://unfccc.int/paris-agreement" 
            },
            { 
              title: "Joint Implementation (JI) Projects", 
              description: "JI allows industrialized countries to invest in projects that reduce emissions in other countries and receive carbon credits in return. India has been a participant in these projects to benefit from the global carbon trading market.", 
              link: "https://unfccc.int/joint-implementation" 
            },
            { 
              title: "Emission Reduction Purchase Agreement (ERPA)", 
              description: "ERPA is an agreement that allows India to sell carbon credits to buyers from industrialized nations. The buyers reduce their emissions while India generates revenues through carbon trading, supporting sustainable development projects.", 
              link: "https://www.ndtv.com/india-news/india-to-earn-carbon-credits-through-climate-finance-3137987" 
            }
          ]
      },
      chipData: [
            { label: "Paris Agreement (2015)" },
            { label: "Kyoto Protocol (1997)" },
            { label: "Montreal Protocol (1987)" },
            { label: "United Nations Framework Convention on Climate Change (UNFCCC) (1992)" },
            { label: "Convention on Biological Diversity (CBD) (1992)" },
            { label: "Stockholm Convention on Persistent Organic Pollutants (POPs) (2001)" },
            { label: "Convention to Combat Desertification (UNCCD) (1994)" },
            { label: "Sendai Framework for Disaster Risk Reduction (2015)" },
            { label: "Agenda 2030 for Sustainable Development and Sustainable Development Goals (SDGs)" },
            { label: "Biodiversity and Climate Change Adaptation Framework (2014)" },
            { label: "Global Environment Facility (GEF)" },
            { label: "United Nations Economic and Social Council (ECOSOC)" },
            { label: "International Solar Alliance (ISA) (2015)" },
            { label: "Global Carbon Project" },
            { label: "International Partnership for Energy Efficiency Cooperation (IPEEC)" },
            { label: "International Maritime Organization (IMO) – Marine Pollution Reduction Commitments" },
            { label: "World Health Organization (WHO) – Climate and Health Commitments" },
            { label: "UNESCO World Heritage Convention (1972)" },
            { label: "Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES)" }
      ],
      defaultLinksData: [
        { title: "National Portal for India", description: "Official portal for the Indian government", url: "https://india.gov.in" },
        { title: "Ministry of Environment, Forest and Climate Change", description: "Government ministry responsible for environmental matters", url: "http://moef.gov.in/" },
        { title: "Swachh Bharat Mission", description: "Government initiative for cleanliness and sanitation", url: "https://swachhbharatmission.gov.in/" },
        { title: "Renewable Energy Development", description: "India's renewable energy initiatives", url: "https://mnre.gov.in/" }
      ]
    },
    "USA": {
  "name": "United States of America",
  "details": "The United States of America (USA) is a country primarily located in North America. It is the third-largest country by land area and population, and the world’s largest economy, known for its political, economic, and cultural influence.",
  "carouselImages": [
    "https://th.bing.com/th/id/OIP.qIVO5VLgIP2clXu2hCJ08QHaE1?rs=1&pid=ImgDetMain", 
    "https://www.myglobalviewpoint.com/wp-content/uploads/2019/01/Unique-Beautiful-Places-to-Visit-in-the-USA-1170x782.jpg",
    "https://th.bing.com/th/id/OIP.0xIduto_dIn9R4b80MargAHaDO?rs=1&pid=ImgDetMain"
  ],
  "epiValue": 28.4,
  "capitalCity": "Washington, D.C.",
  "capitalDescription": "Washington, D.C. is the capital of the United States, known for its monumental buildings, national parks, and as the seat of the U.S. government, housing important institutions like the White House and Capitol Hill.",
  "backgroundImage": "https://th.bing.com/th/id/OIP.qsswiqTJ4trTXrVWW9DG3wHaE7?rs=1&pid=ImgDetMain",
  "population": 331002651,
  "populationGrowth": {
    "chartLabels": ["12-01-2022", "01-01-2023", "02-01-2023"],
    "chartData": [1.1, 1.2, 1.3]
  },
  "areaData": 9833517,
  "environmentalPolicyOverview": "The United States' environmental policies focus on climate change mitigation, sustainable development, and environmental protection, with a strong emphasis on innovation, clean energy, and regulation enforcement.",
  "airQualityIndex": {
    "value": 65,
    "chartLabels": ["12-01-2022", "01-01-2023", "02-01-2023"],
    "chartData": [62, 64, 65]
  },
  "waterQualityIndex": {
    "value": 90,
    "chartLabels": ["12-01-2022", "01-01-2023", "02-01-2023"],
    "chartData": [89, 90, 91]
  },
  "deforestationRate": {
    "value": 0.8,
    "chartLabels": ["2019", "2020", "2021"],
    "chartData": [1.0, 0.9, 0.8]
  },
  "biodiversityScore": {
    "value": 0.85,
    "chartLabels": ["12-01-2022", "01-01-2023", "02-01-2023"],
    "chartData": [0.84, 0.85, 0.85]
  },
  "recyclingRate": {
    "value": 32,
    "chartLabels": ["12-01-2022", "01-01-2023", "02-01-2023"],
    "chartData": [30, 31, 32]
  },
  "timelineEvents": [
    {
      "title": "Paris Climate Agreement Rejoined",
      "body": "In 2021, the United States rejoined the Paris Climate Agreement, recommitting to reducing greenhouse gas emissions and focusing on clean energy transitions."
    },
    {
      "title": "Clean Power Plan Announced",
      "body": "In 2015, the Obama administration introduced the Clean Power Plan to limit carbon emissions from power plants, aiming for a 32% reduction by 2030."
    },
    {
      "title": "America’s Plan for Clean Energy",
      "body": "In 2021, the U.S. unveiled its plan for a clean energy future, focusing on reducing carbon emissions, promoting green technologies, and advancing energy efficiency."
    },
    {
      "title": "Infrastructure Investment and Jobs Act Signed",
      "body": "In 2021, the U.S. government passed the Infrastructure Investment and Jobs Act, allocating funds for renewable energy projects and upgrading the country’s energy infrastructure."
    },
    {
      "title": "Biden's 2030 Greenhouse Gas Emissions Target",
      "body": "In 2021, President Biden set a target to reduce U.S. greenhouse gas emissions by 50-52% below 2005 levels by 2030 as part of his climate change action plan."
    },
    {
      "title": "U.S. Launches Energy Earthshot Initiatives",
      "body": "In 2021, the U.S. government launched its Energy Earthshots, a set of bold, science-based goals to reduce clean energy costs and accelerate energy transitions."
    },
    {
      "title": "America’s Hydrogen Strategy Launched",
      "body": "In 2022, the U.S. unveiled its National Clean Hydrogen Strategy and Roadmap, aiming to develop clean hydrogen as a critical part of the U.S. decarbonization efforts."
    },
    {
      "title": "Biden Administration Launches 30 GW Offshore Wind Target",
      "body": "In 2022, the Biden administration set a target to deploy 30 GW of offshore wind energy by 2030 to boost clean energy production and create thousands of jobs."
    },
    {
      "title": "U.S. Leads Global EV Manufacturing and Infrastructure Growth",
      "body": "In 2023, the U.S. took a leadership role in promoting electric vehicle (EV) production, with major investments in EV manufacturing, charging infrastructure, and battery technologies."
    },
    {
      "title": "America’s National Ocean Climate Action Plan",
      "body": "In 2023, the U.S. launched a National Ocean Climate Action Plan to protect ocean ecosystems, restore marine habitats, and reduce emissions from ocean-based sectors."
    },
    {
      "title": "The U.S. Green New Deal Proposal",
      "body": "In 2023, U.S. policymakers introduced a proposal for a Green New Deal aimed at addressing climate change and economic inequality by transforming the nation’s energy and infrastructure systems."
    },
    {
      "title": "U.S. Achieves 50 GW of Solar Power Capacity",
      "body": "In 2023, the U.S. reached 50 GW of solar power capacity, marking significant progress in its renewable energy goals."
    },
    {
      "title": "Biden Administration Expands Electric Vehicle Incentives",
      "body": "In 2024, the U.S. government expanded electric vehicle tax credits and incentives to encourage broader adoption of EVs and build a cleaner transportation sector."
    },
    {
      "title": "U.S. Energy Storage Systems Investment Ramped Up",
      "body": "In 2024, the U.S. increased investments in energy storage systems to improve the stability and resilience of renewable energy grids."
    }
  ],
  defaultCardData: {
    "ClimateChangeMitigation": [
      {
        "title": "Climate Action Plan",
        "description": "A comprehensive framework that outlines steps to reduce greenhouse gas emissions and transition to a clean energy economy. It includes policies for clean energy, energy efficiency, and climate resilience.",
        "link": "https://www.whitehouse.gov/briefing-room/statements-releases/2021/05/03/fact-sheet-the-american-job-plan/"
      },
      {
        "title": "Clean Power Plan",
        "description": "A policy aimed at reducing carbon emissions from power plants through state-specific emissions reduction targets and a transition to cleaner energy sources.",
        "link": "https://www.epa.gov/cleanpowerplan"
      },
      {
        "title": "Electric Vehicle (EV) Incentives",
        "description": "Incentives for electric vehicle adoption, including rebates, tax credits, and infrastructure development to increase EV adoption and reduce emissions from the transportation sector.",
        "link": "https://www.energy.gov/eere/electricvehicles"
      },
      {
        "title": "Energy Efficiency and Conservation Block Grant Program (EECBG)",
        "description": "A federal initiative that provides funding to local governments to develop and implement energy efficiency and conservation projects, reducing energy consumption and carbon emissions.",
        "link": "https://www.energy.gov/eere/slsc/eecbg-program"
      },
      {
        "title": "Affordable Clean Energy Rule",
        "description": "A regulation aimed at reducing greenhouse gas emissions from coal-fired power plants by promoting cleaner energy sources and improving energy efficiency.",
        "link": "https://www.epa.gov/ace"
      },
      {
        "title": "Green New Deal",
        "description": "A proposed comprehensive policy to address climate change by reducing carbon emissions, transitioning to renewable energy, and creating sustainable, green jobs.",
        "link": "https://www.congress.gov/bill/116th-congress/house-bill/109"
      },
      {
        "title": "National Renewable Energy Laboratory (NREL)",
        "description": "A laboratory that focuses on advancing renewable energy technologies and promoting the adoption of clean energy solutions to reduce emissions and combat climate change.",
        "link": "https://www.nrel.gov"
      },
      {
        "title": "Clean Energy Standard",
        "description": "A policy to accelerate the transition to renewable energy by setting targets for clean energy production and promoting the use of non-fossil fuel sources.",
        "link": "https://www.energy.gov/eere/renewables/clean-energy-standards"
      },
      {
        "title": "Carbon Tax and Dividend Program",
        "description": "A policy that introduces a tax on carbon emissions with the revenue returned to citizens in the form of dividends, aimed at reducing carbon emissions and promoting cleaner energy.",
        "link": "https://www.carbontax.org"
      },
      {
        "title": "Climate Resilience Fund",
        "description": "A fund that provides financial assistance to communities and states to implement projects that enhance resilience to climate impacts such as extreme weather events and sea-level rise.",
        "link": "https://www.fema.gov/grants/award"
      },
      {
        "title": "Renewable Fuel Standard (RFS)",
        "description": "A policy that requires the blending of renewable fuels like ethanol and biodiesel into the transportation fuel supply, reducing dependence on fossil fuels and lowering carbon emissions.",
        "link": "https://www.epa.gov/renewable-fuel-standard-program"
      }
    ],
    "BiodiversityandConservation": [
  { 
    title: "Endangered Species Act (ESA)", 
    description: "A key legislation to protect species at risk of extinction, as well as their habitats, promoting biodiversity conservation.", 
    link: "https://www.fws.gov/laws/esa.html" 
  },
  { 
    title: "National Wildlife Refuge System", 
    description: "A system of protected areas managed by the U.S. Fish and Wildlife Service to conserve fish, wildlife, and plants, with a focus on biodiversity.", 
    link: "https://www.fws.gov/refuges/" 
  },
  { 
    title: "Bald and Golden Eagle Protection Act", 
    description: "Protects eagles and their habitats from disturbance and destruction, contributing to biodiversity conservation efforts in the U.S.", 
    link: "https://www.fws.gov/laws/acts.html" 
  },
  { 
    title: "The Marine Mammal Protection Act", 
    description: "A law that prohibits the taking of marine mammals in U.S. waters, aimed at ensuring the protection of marine biodiversity.", 
    link: "https://www.fisheries.noaa.gov/topic/laws-policies" 
  },
  { 
    title: "The Migratory Bird Treaty Act", 
    description: "Protects migratory bird species and their habitats, contributing significantly to U.S. biodiversity conservation efforts.", 
    link: "https://www.fws.gov/migratory-birds" 
  },
  { 
    title: "National Parks Conservation Association (NPCA)", 
    description: "An organization that works to preserve and protect U.S. national parks and wildlife, ensuring conservation and biodiversity.", 
    link: "https://www.npca.org/" 
  },
  { 
    title: "The Great American Outdoors Act", 
    description: "A historic law to permanently fund national parks and public lands, promoting biodiversity conservation and protecting natural ecosystems.", 
    link: "https://www.doi.gov/greatamericanoutdoorsact" 
  },
  { 
    title: "Coral Triangle Initiative", 
    description: "An international agreement to protect and conserve marine biodiversity in the Coral Triangle, an area of high biodiversity concentration.", 
    link: "https://www.coraltriangleinitiative.org/" 
  },
  { 
    title: "U.S. Forest Service", 
    description: "Manages national forests and grasslands, focusing on the conservation of biodiversity and sustainable land management.", 
    link: "https://www.fs.usda.gov/" 
  },
  { 
    title: "National Environmental Policy Act (NEPA)", 
    description: "Requires federal agencies to assess the environmental impact of proposed actions, protecting biodiversity through sustainable practices.", 
    link: "https://www.epa.gov/nepa" 
  }
],
"RenewableEnergyAndClean": [
  { 
    title: "The Clean Power Plan", 
    description: "A U.S. government initiative aimed at reducing carbon pollution from power plants, promoting renewable energy solutions for cleaner air.", 
    link: "https://www.epa.gov/cleanpowerplan" 
  },
  { 
    title: "Solar Investment Tax Credit (ITC)", 
    description: "A federal incentive that supports the development of solar energy systems by providing a tax credit for installation costs.", 
    link: "https://www.energy.gov/savings/solar-investment-tax-credit-itc" 
  },
  { 
    title: "Wind Energy Production Tax Credit (PTC)", 
    description: "A federal incentive that supports the growth of wind energy by providing tax credits for electricity produced from wind turbines.", 
    link: "https://www.energy.gov/eere/wind/advantages-wind-energy" 
  },
  { 
    title: "Energy Independence and Security Act of 2007", 
    description: "Promotes energy efficiency and the development of clean renewable energy sources, focusing on reducing U.S. dependence on foreign oil.", 
    link: "https://www.congress.gov/bill/110th-congress/house-bill/6" 
  },
  { 
    title: "The Green New Deal", 
    description: "A proposed policy agenda aimed at addressing climate change and economic inequality by investing in renewable energy, clean jobs, and sustainable infrastructure.", 
    link: "https://www.congress.gov/bill/116th-congress/house-resolution/109" 
  },
  { 
    title: "Renewable Energy Standards (RES)", 
    description: "State-level regulations that require electric utilities to obtain a certain percentage of their power from renewable sources.", 
    link: "https://www.energy.gov/eere/slsc/maps/renewable-portfolio-standards" 
  },
  { 
    title: "Clean Energy Standard (CES)", 
    description: "A U.S. policy that seeks to promote clean energy by setting a federal standard for clean electricity generation.", 
    link: "https://www.energy.gov/eere/slsc/maps/renewable-portfolio-standards" 
  },
  { 
    title: "Geothermal Technologies Office", 
    description: "Supports research, development, and deployment of geothermal energy technologies as a renewable, sustainable power source.", 
    link: "https://www.energy.gov/eere/geothermal/geothermal-technologies-office" 
  },
  { 
    title: "The Energy Star Program", 
    description: "A voluntary program that helps businesses and individuals save money and protect the environment through energy-efficient products and practices.", 
    link: "https://www.energystar.gov/" 
  },
  { 
    title: "Electric Vehicle Incentives", 
    description: "Federal and state programs that provide tax credits and rebates for the purchase of electric vehicles, promoting cleaner transportation options.", 
    link: "https://www.energy.gov/eere/electricvehicles" 
  }
],
"GreenFinance": [
  { 
    title: "Green Bond Principles", 
    description: "A set of guidelines to support the issuance of green bonds, used to raise funds for projects aimed at environmental sustainability.", 
    link: "https://www.icmagroup.org/green-social-and-sustainability-bonds/green-bond-principles/" 
  },
  { 
    title: "U.S. Department of Energy Loan Programs Office", 
    description: "Provides financing for innovative clean energy projects to help accelerate the deployment of renewable technologies.", 
    link: "https://www.energy.gov/lpo" 
  },
  { 
    title: "California Green Bank", 
    description: "Supports clean energy investments by providing financing to renewable energy projects in California.", 
    link: "https://www.calgreenbank.com/" 
  },
  { 
    title: "Impact Investing", 
    description: "Investments made with the intention to generate a positive, measurable environmental impact alongside a financial return.", 
    link: "https://www.ussif.org/" 
  },
  { 
    title: "The Ceres Accelerator for Sustainable Capital Markets", 
    description: "Works with companies and investors to promote environmentally sustainable investments and drive financial markets toward green priorities.", 
    link: "https://www.ceres.org/" 
  },
  { 
    title: "The Green Finance Institute", 
    description: "Works to accelerate the transition to a net-zero economy by promoting the financing of environmental solutions and green projects.", 
    link: "https://www.greenfinanceinstitute.co.uk/" 
  },
  { 
    title: "B Corporation Certification", 
    description: "A certification for companies that meet high environmental and social performance standards, including sustainable business practices and green finance initiatives.", 
    link: "https://bcorporation.net/" 
  },
  { 
    title: "US Green Building Council (USGBC)", 
    description: "Leads the way in developing standards and certifications for environmentally sustainable buildings and green finance initiatives in construction.", 
    link: "https://www.usgbc.org/" 
  },
  { 
    title: "The Green Climate Fund", 
    description: "A global fund established to support the efforts of developing countries in responding to the challenges of climate change and advancing green development.", 
    link: "https://www.greenclimate.fund/" 
  },
  { 
    title: "The US Climate Finance Partnership", 
    description: "A partnership between the U.S. government and the private sector to mobilize private capital to support clean energy and climate change solutions globally.", 
    link: "https://www.climatefinance.gov/" 
  }
],
"EnvironmentalRegulationsAndPolicies" : [
  { 
    "title": "National Environmental Policy Act (NEPA), 1970", 
    "description": "NEPA establishes the broad national framework for protecting the environment in the USA. It requires federal agencies to assess the environmental effects of their proposed actions before making decisions.", 
    "link": "https://www.epa.gov/nepa" 
  },
  { 
    "title": "Clean Air Act (CAA), 1970", 
    "description": "This Act provides the framework for the regulation of air emissions from stationary and mobile sources in the USA. It aims to improve air quality and reduce pollution levels nationwide.", 
    "link": "https://www.epa.gov/clean-air-act-overview" 
  },
  { 
    "title": "Clean Water Act (CWA), 1972", 
    "description": "The CWA aims to restore and maintain the integrity of the nation's waters by preventing point and non-point pollution sources, providing water quality standards, and improving wastewater treatment.", 
    "link": "https://www.epa.gov/clean-water-act-overview" 
  },
  { 
    "title": "Endangered Species Act (ESA), 1973", 
    "description": "The ESA provides for the conservation of species that are endangered or threatened and their habitats. It is a crucial law in the preservation of biodiversity in the USA.", 
    "link": "https://www.fws.gov/endangered" 
  },
  { 
    "title": "Resource Conservation and Recovery Act (RCRA), 1976", 
    "description": "RCRA governs the disposal of solid and hazardous waste, aiming to reduce waste generation and promote recycling and resource recovery.", 
    "link": "https://www.epa.gov/rcra" 
  },
  { 
    "title": "Toxic Substances Control Act (TSCA), 1976", 
    "description": "This Act regulates the manufacture, use, and disposal of chemical substances in the USA, ensuring that harmful chemicals do not pose risks to public health or the environment.", 
    "link": "https://www.epa.gov/tsca" 
  },
  { 
    "title": "Superfund Amendments and Reauthorization Act (SARA), 1986", 
    "description": "SARA amended the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA), improving the ability to clean up hazardous waste sites and responding to hazardous substance spills.", 
    "link": "https://www.epa.gov/superfund" 
  },
  { 
    "title": "Energy Policy Act (EPACT), 2005", 
    "description": "This Act addresses energy production in the USA, including the development of renewable energy sources and energy efficiency, as well as the regulation of fuel use and waste management.", 
    "link": "https://www.energy.gov/eere/energy-policy-act-2005" 
  },
  { 
    "title": "The Oil Pollution Act (OPA), 1990", 
    "description": "The OPA provides the legal framework for preventing and responding to oil spills in the USA. It holds oil companies accountable for the cleanup of oil spills and other environmental damages.", 
    "link": "https://www.epa.gov/oil-spills-prevention-and-preparedness-regulations" 
  },
  { 
    "title": "Pollution Prevention Act (PPA), 1990", 
    "description": "This Act focuses on reducing the amount of pollution generated at the source, promoting practices that minimize pollution and waste in industries and municipalities.", 
    "link": "https://www.epa.gov/p2" 
  },
  { 
    "title": "Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA), 1947", 
    "description": "FIFRA regulates the use and distribution of pesticides in the USA to ensure that they do not pose unreasonable risks to human health or the environment.", 
    "link": "https://www.epa.gov/pesticides" 
  }
],
"CarbonCreditsAndTrading" : [
  { 
    "title": "Cap-and-Trade Program (California's AB 32)", 
    "description": "California's Cap-and-Trade Program is one of the largest carbon trading programs in the USA, designed to reduce greenhouse gas emissions. It sets a statewide limit on emissions and allows companies to buy and sell carbon allowances.", 
    "link": "https://ww2.arb.ca.gov/our-work/programs/cap-and-trade-program" 
  },
  { 
    "title": "Regional Greenhouse Gas Initiative (RGGI)", 
    "description": "RGGI is a cooperative effort among Northeastern and Mid-Atlantic states to cap and reduce CO2 emissions from the power sector, using a market-based program to buy and sell carbon allowances.", 
    "link": "https://www.rggi.org/" 
  },
  { 
    "title": "Voluntary Carbon Market", 
    "description": "The voluntary carbon market allows companies and individuals to purchase carbon offsets to mitigate their own carbon emissions. The market is driven by corporate social responsibility and voluntary commitments to reduce emissions.", 
    "link": "https://www.iicp.org/voluntary-carbon-market" 
  },
  { 
    "title": "The American Carbon Registry (ACR)", 
    "description": "The ACR is a voluntary carbon offset registry in the USA that verifies and registers carbon credits for projects that reduce greenhouse gas emissions. It is one of the leading carbon registries in the country.", 
    "link": "https://www.americancarbonregistry.org/" 
  },
  { 
    "title": "Carbon Offsetting and Reduction Scheme for International Aviation (CORSIA)", 
    "description": "CORSIA is a global initiative to offset emissions from international aviation. USA-based airlines are a key participant in the program, purchasing carbon credits to meet emissions targets.", 
    "link": "https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx" 
  },
  { 
    "title": "The Clean Development Mechanism (CDM)", 
    "description": "Under the Kyoto Protocol, CDM allows industrialized countries to invest in emission reduction projects in developing countries to earn carbon credits. The USA has been a participant in the global CDM market.", 
    "link": "https://unfccc.int/clean-development-mechanism" 
  },
  { 
    "title": "Carbon Credit Trading on the Chicago Climate Exchange (CCX)", 
    "description": "The Chicago Climate Exchange (CCX) was a voluntary greenhouse gas emissions reduction and trading program where businesses could buy and sell carbon credits. The exchange is now defunct, but its legacy influenced future carbon trading programs.", 
    "link": "https://www.chicagoclimatex.com/" 
  },
  { 
    "title": "Carbon Pricing in the USA", 
    "description": "Carbon pricing in the USA involves taxing carbon emissions or creating a cap-and-trade system that gives a financial incentive to reduce emissions, supporting the country's overall climate goals.", 
    "link": "https://www.c2es.org/what-we-do/economics/carbon-pricing/" 
  }
]



  },
    chipData: [
      { "label": "Paris Agreement (2015)" },
      { "label": "Kyoto Protocol (1997)" },
      { "label": "Montreal Protocol (1987)" },
      { "label": "United Nations Framework Convention on Climate Change (UNFCCC) (1992)" },
      { "label": "Convention on Biological Diversity (CBD) (1992)" },
      { "label": "Stockholm Convention on Persistent Organic Pollutants (POPs) (2001)" },
      { "label": "Convention to Combat Desertification (UNCCD) (1994)" },
      { "label": "Sendai Framework for Disaster Risk Reduction (2015)" },
      { "label": "Agenda 2030 for Sustainable Development and Sustainable Development Goals (SDGs)" },
      { "label": "Biodiversity and Climate Change Adaptation Framework (2014)" },
      { "label": "Global Environment Facility (GEF)" },
      { "label": "United Nations Economic and Social Council (ECOSOC)" },
      { "label": "International Solar Alliance (ISA) (2015)" },
      { "label": "Global Carbon Project" },
      { "label": "International Partnership for Energy Efficiency Cooperation (IPEEC)" },
      { "label": "International Maritime Organization (IMO) – Marine Pollution Reduction Commitments" },
      { "label": "World Health Organization (WHO) – Climate and Health Commitments" },
      { "label": "UNESCO World Heritage Convention (1972)" },
      { "label": "Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES)" }
    ],
    defaultLinksData: [
      { "title": "USA Government Portal", "description": "Official portal for the U.S. government", "url": "https://www.usa.gov" },
      { "title": "Environmental Protection Agency (EPA)", "description": "Agency responsible for environmental protection", "url": "https://www.epa.gov/" },
      { "title": "U.S. Department of Energy (DOE)", "description": "Department focusing on energy policies and initiatives", "url": "https://www.energy.gov/" },
      { "title": "Clean Energy Investment", "description": "U.S. clean energy initiatives", "url": "https://www.energy.gov/eere" }
    ]
  }
  };
  export default countryData; 