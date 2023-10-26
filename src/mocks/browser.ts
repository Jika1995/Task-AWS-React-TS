import { http, HttpResponse, } from "msw"
import { setupWorker } from 'msw/browser'
import { useCreateUser } from "../services/addUser"
import { useDeleteUser } from "../services/deleteUser"
import { useEditUser } from "../services/editUser"
import { useFetchUserById } from "../services/fetchUserById"
import { User } from "../utils/types"

const usersData = [
    {
        id: 1,
        name: 'Jack',
        salary: 500,
        active: true,
        feedback: 'The customer service at this car dealership was exceptional - the staff was knowledgeable and made the buying process smooth.'
    },
    {
        id: 2,
        name: 'Jennie',
        salary: 800,
        active: true,
        feedback: 'I had a great experience with their customer service; they were patient and answered all my questions.'
    },
    {
        id: 3,
        name: 'Liam',
        salary: 850,
        active: true,
        feedback: "The dealership's staff was friendly and accommodating, making my car purchase hassle-free"
    },
    {
        id: 4,
        name: 'Diana',
        salary: 1600,
        active: true,
        feedback: 'I appreciated the prompt and courteous service I received at this dealership.'
    },
    {
        id: 5,
        name: 'Miranda',
        salary: 2000,
        active: true,
        feedback: "The car dealership's customer service exceeded my expectations; they went the extra mile to find the right vehicle for me."
    },
    {
        id: 6,
        name: 'Samantha',
        salary: 1700,
        active: true,
        feedback: 'The sales team was professional and attentive to my needs, making the car-buying experience enjoyable.'
    },
    {
        id: 7,
        name: 'Kate',
        salary: 900,
        active: true,
        feedback: "I was impressed with the dealership's customer service; they made me feel valued and important."
    },
    {
        id: 8,
        name: 'Jeremie',
        salary: 1300,
        active: true,
        feedback: "The dealership's staff was informative and helped me make an informed decision about my car purchase."
    },
    {
        id: 9,
        name: 'Alice',
        salary: 1800,
        active: true,
        feedback: "Their customer service was top-notch; they were patient and understanding, ensuring I got the car I wanted."
    },
    {
        id: 10,
        name: 'Will',
        salary: 2500,
        active: true,
        feedback: "I had a positive experience with this dealership's customer service; they were responsive and made the buying process efficient."
    },
    {
        id: 11,
        name: 'Lisa',
        salary: 700,
        active: true,
        feedback: "The customer service at this dealership was excellent. They were patient in helping me find the perfect car and offered a competitive deal."
    },
    {
        id: 12,
        name: 'Dan',
        salary: 1500,
        active: true,
        feedback: "I was impressed with the car dealership's customer service. They provided a smooth and efficient buying experience, and their staff was knowledgeable and friendly."
    }
]

const worker = setupWorker(
    http.get('/api/users',
        ({ params }) => {
            return HttpResponse.json(usersData)
        } //позже здесь будет пагинация
    ),
    http.get('/api/users/:id', async ({ request, params, }) => {
        const { id } = params
        const [user] = useFetchUserById({ id }, { enabled: Boolean(id) })

        if (!user) {
            return new HttpResponse(null, { status: 404, statusText: 'User not found' })
        }

        return HttpResponse.json(user)
    }),
    // http.post('/api/users', async ({ request }) => {

    //     // const newUser = await request.json()
    //     // const {name, salary, feedback, active} = request.body
    //     const [createUser] = useCreateUser()

    //     // await createUser(request.body)

    //     return HttpResponse.json(newUser, { status: 201 })
    // }),
    http.patch('/api/users/:id', async ({ request, params }) => {
        const { id } = params

        let userToEdit = usersData.find(item => item.id === +id)

        if (!userToEdit) {
            return new HttpResponse(null, { status: 404 })
        }

        const [editUser] = useEditUser();
        // const editedUser = await editUser({id, data: request.json()}) //?
        // editUser({id, data: request.body} ) //?

        // return HttpResponse.json(editedUser, {status: 201})

    }),
    http.delete('/api/users/:id', ({ params }) => {
        const { id } = params

        let deletedUser = usersData.find(item => item.id === +id)

        if (!deletedUser) {
            return new HttpResponse(null, { status: 404 })
        }

        const [deleteUser] = useDeleteUser();
        deleteUser({ id })

        return HttpResponse.json(deletedUser, { status: 201 })
    })
)

worker.start()
