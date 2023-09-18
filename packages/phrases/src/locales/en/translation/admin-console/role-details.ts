const role_details = {
  back_to_roles: 'Back to Roles',
  identifier: 'Identifier',
  delete_description:
    'Doing so will remove the permissions associated with this role from the affected users and delete the mapping between roles, users, and permissions.',
  role_deleted: '{{name}} was successfully deleted.',
  settings_tab: 'Settings',
  users_tab: 'Users',
  permissions_tab: 'Permissions',
  settings: 'Settings',
  settings_description:
    'Roles are a grouping of permissions that can be assigned to users. They also provide a way to aggregate permissions defined for different APIs, making it more efficient to add, remove, or adjust permissions compared to assigning them individually to users.',
  field_name: 'Name',
  field_description: 'Description',
  permission: {
    assign_button: 'Assign Permissions',
    assign_title: 'Assign permissions',
    assign_subtitle:
      'Assign permissions to this role. The role will gain the added permissions, and users with this role will inherit these permissions.',
    assign_form_field: 'Assign permissions',
    added_text_one: '{{count, number}} permission added',
    added_text_other: '{{count, number}} permissions added',
    api_permission_count_one: '{{count, number}} permission',
    api_permission_count_other: '{{count, number}} permissions',
    confirm_assign: 'Assign Permissions',
    permission_assigned: 'The selected permissions were successfully assigned to this role',
    deletion_description:
      'If this permission is removed, the affected user with this role will lose the access granted by this permission.',
    permission_deleted: 'The permission "{{name}}" was successfully removed from this role',
    empty: 'No permission available',
  },
  users: {
    assign_button: 'Assign Users',
    name_column: 'User',
    app_column: 'App',
    latest_sign_in_column: 'Latest sign in',
    delete_description:
      'It will remain in your user pool but lose the authorization for this role.',
    deleted: '{{name}} was successfully removed from this role',
    assign_title: 'Assign users',
    assign_subtitle:
      'Assign users to this role. Find appropriate users by searching name, email, phone, or user ID.',
    assign_users_field: 'Assign users',
    confirm_assign: 'Assign users',
    users_assigned: 'The selected users were successfully assigned to this role',
    empty: 'No user available',
  },
  applications: {
    assign_button: 'Assign applications',
    name_column: 'Application',
    app_column: 'App',
    deleted: '{{name}} was successfully removed from this role',
    assign_title: 'Assign applications',
    assign_subtitle:
      'Assign applications to this role. Find appropriate applications by searching name, description or app ID.',
    assign_applications_field: 'Assign applications',
    confirm_assign: 'Assign applications',
    applications_assigned: 'The selected applications were successfully assigned to this role',
    empty: 'No application available',
  },
};

export default Object.freeze(role_details);
