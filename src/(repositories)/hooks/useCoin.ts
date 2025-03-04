import { useCallback, useState } from "react";
import { userService } from "@/repositories/services/user.service";
import { UserModel } from "@/models/user.model";
import { PageModel } from "@/models/page.model";
import { PageableModel } from "@/models/pageable.model.ts";

export function useUser() {
  const [isAllUsersFetchLoading, setIsAllUsersFetchLoading] = useState(false);
  const [isUserFetchLoading, setIsUserFetchLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isUpdateUserLoading, setIsUpdateUserLoading] = useState(false);
  const [isCreateUserLoading, setIsCreateUserLoading] = useState(false);
  const [usersData, setUsersData] = useState<PageModel<UserModel>>();
  const [userData, setUserData] = useState<UserModel>();

  const fetchUsersData = useCallback(async (pageable: PageableModel) => {
    setIsAllUsersFetchLoading(true);
    try {
      const data = await userService.getAllUsers(pageable);
      setUsersData(data);
    } finally {
      setIsAllUsersFetchLoading(false);
    }
  }, []);

  const fetchUserById = useCallback(async (id: number) => {
    setIsUserFetchLoading(true);
    try {
      const data = await userService.getUserById(id);
      setUserData(data);
    } finally {
      setIsUserFetchLoading(false);
    }
  }, []);

  const deleteUserById = useCallback(async (id: number) => {
    setIsDeleteLoading(true);
    try {
      await userService.deleteUserById(id);
    } finally {
      setIsDeleteLoading(false);
    }
  }, []);

  const updateUserById = useCallback(async (id: number, data: UserModel) => {
    setIsUpdateUserLoading(true);
    try {
      await userService.updateUserById(id, data);
    } finally {
      setIsUpdateUserLoading(false);
    }
  }, []);

  const createUser = useCallback(async (data: UserModel) => {
    setIsCreateUserLoading(true);
    try {
      await userService.createUser(data);
    } finally {
      setIsCreateUserLoading(false);
    }
  }, []);

  return {
    isAllUsersFetchLoading,
    usersData,
    userData,
    fetchUsersData,
    fetchUserById,
    deleteUserById,
    updateUserById,
    createUser,
    isUserFetchLoading,
    isDeleteLoading,
    isUpdateUserLoading,
    isCreateUserLoading,
  };
}
