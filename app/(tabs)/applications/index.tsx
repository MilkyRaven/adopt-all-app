import ApplicationList from '@/modules/application/presentation/ApplicationList'
import { useFocusEffect } from 'expo-router'
import useGetApplications from '@/modules/application/infraestructure/hooks/useGetApplications'
import { useCallback } from 'react'

export default function ApplicationsScreen() {
    const { applications, loading, error, refetch } = useGetApplications();

    useFocusEffect(
        useCallback(() => {
            refetch()
        }, [])
    )

    return (
        <ApplicationList applications={applications} loading={loading} error={error} />
    )
}
