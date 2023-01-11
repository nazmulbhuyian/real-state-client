import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUser = () => {


    const { isLoading, refetch, data: users = [] } = useQuery({
        queryKey: ['/allUsers'],
        queryFn: async () => {
            const res = await fetch('https://real-state-server.vercel.app/allUsers')
            const data = await res.json()
            return data
        }
    })

    const handleAdmin = (id) => {
        fetch(`https://real-state-server.vercel.app/makeAdmin/${id}`, {
            method: 'PUT',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('User Add Admin Successfully')
                    refetch()
                }
            })
    }


    const handleDelete = (id) => {
        // removeUser(email);
        fetch(`https://real-state-server.vercel.app/userDelete/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('User Delete Successfully')
                    refetch()
                }
            })
    }

    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-bold underline text-primary'>All User In Your Website Is Here</h1>
            <div className="overflow-x-auto">
                <table className="table w-4/5 mx-auto my-16">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>User Name</th>
                            <th>User Role</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>

                                {
                                    user.role === 'admin' ?
                                        <td><button onClick={() => handleAdmin(user._id)} className="btn btn-accent text-white hover:bg-primary border-0" disabled>Make Admin</button></td>
                                        :
                                        <td><button onClick={() => handleAdmin(user._id)} className="btn btn-accent text-white hover:bg-primary border-0">Make Admin</button></td>
                                }

                                <td><button onClick={() => handleDelete(user._id)} className="btn btn-error hover:bg-orange-500 text-white">Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;