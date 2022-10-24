window.addEventListener('DOMContentLoaded', () => {
    /* VARIABLE DECLARATIONS */

    const reviews = [
        {
            name: 'John Doe',
            job: 'None',
            img: 'images/1.jpg',
            text: 'someting. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum eaque qui laborum voluptatum similique velit vero ipsum distinctio dolor molestias odio totam adipisci error natus dicta eum neque aliquam molestiae, libero consectetur fugiat, unde dolorem! Vel iste velit fuga, impedit eveniet nihil, cumque et quas exercitationem enim nulla rem?'
        },
        {
            name: 'Jane Doe',
            job: 'Nothing',
            img: 'images/2.jpg',
            text: 'nothing. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum eaque qui laborum voluptatum similique velit vero ipsum distinctio dolor molestias odio totam adipisci error natus dicta eum neque aliquam molestiae, libero consectetur fugiat, unde dolorem! Vel iste velit fuga, impedit eveniet nihil, cumque et quas exercitationem enim nulla rem?'
        },
        {
            name: 'John Dees',
            job: 'Something',
            img: 'images/3.jpg',
            text: 'none. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum eaque qui laborum voluptatum similique velit vero ipsum distinctio dolor molestias odio totam adipisci error natus dicta eum neque aliquam molestiae, libero consectetur fugiat, unde dolorem! Vel iste velit fuga, impedit eveniet nihil, cumque et quas exercitationem enim nulla rem?'
        },
        {
            name: 'Jane Deer',
            job: 'Not telling',
            img: 'images/4.jpg',
            text: 'not telling. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum eaque qui laborum voluptatum similique velit vero ipsum distinctio dolor molestias odio totam adipisci error natus dicta eum neque aliquam molestiae, libero consectetur fugiat, unde dolorem! Vel iste velit fuga, impedit eveniet nihil, cumque et quas exercitationem enim nulla rem?'
        }
    ]

    //ELEMENTS TO BE CHANGED
    const img = document.getElementById('img')
    const author = document.getElementById('author')
    const job = document.getElementById('job')
    const info = document.getElementById('info')

    //BUTTONS AND THE CURRENT ITEM VALUE
    const precBtn = document.querySelector('.prev-btn')
    const nextBtn = document.querySelector('.next-btn')
    const randomBtn = document.querySelector('.random-btn')
    let currentItem = 0

    //------------------------------------------------------------------------------------------------------------------------------------------

    /* FUNCTIONS DECLARATIONS*/

    const showPerson = (person) => {
        const item = reviews[person]
        img.src = item.img
        author.textContent = item.name
        job.textContent = item.job
        info.textContent = item.text
    }
    const getRandom = () => {
        return Math.floor(Math.random() * reviews.length)
    }

    //------------------------------------------------------------------------------------------------------------------------------------------

    //FUNCTIONALITY 

    precBtn.addEventListener('click', () => {
        currentItem--

        if (currentItem < 0) {
            currentItem = 3
        }

        showPerson(currentItem)
    })

    nextBtn.addEventListener('click', () => {
        currentItem++

        if (currentItem > (reviews.length - 1)) {
            currentItem = 0
        }

        showPerson(currentItem)
    })

    randomBtn.addEventListener('click', () => {
        currentItem = getRandom()
        showPerson(currentItem)
    })

    //--------------------------------------------------------------------------------------------------------------------------------------
})