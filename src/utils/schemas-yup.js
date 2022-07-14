import * as yup from 'yup';

const createSchoolSchema = yup.object().shape({
    name: yup.string().min(4,'Too short!. Should be 4 or more characters.').max(50,'Too long!. Max is 50 characters').required('Required!'),
    level: yup.string().required('Required!'),
    registrationStatus: yup.string().min(4,'Too short!. Should be 4 or more characters.').max(50,'Too long!. Max is 50 characters').required('Required!'),
    principal: yup.string().required('Required!'),
    healthFacility: yup.string().required('Required!'),
    address: yup.string().required('Required!'),
    passRate: yup.number().required('Required!'),
    email: yup.string().email('Invalid Email').required('Required!'),
    courses: yup.array().required('Required!'),
    contacts: yup.array().required('Required!'),
    district: yup.string().required('Required!')
})

const editSchoolSchema = yup.object().shape({
    name: yup.string().ensure().min(4,'Too short!. Should be 4 or more characters.').max(50,'Too long!. Max is 50 characters').required('Required!'),
    level: yup.string().ensure().required('Required!'),
    registrationStatus: yup.string().ensure().min(4,'Too short!. Should be 4 or more characters.').max(50,'Too long!. Max is 50 characters').required('Required!'),
    principal: yup.string().ensure().required('Required!'),
    healthFacility: yup.string().ensure().required('Required!'),
    address: yup.string().ensure().required('Required!'),
    passRate: yup.number().required('Required!'),
    email: yup.string().ensure().email('Invalid Email').required('Required!'),
    courses: yup.array().required('Required!'),
    contacts: yup.array().required('Required!'),
    district: yup.string().ensure().required('Required!')
})

const createCourseSchema = yup.object().shape({
    name: yup.string().min(4,'Too short!. Should be 4 or more characters.').max(50,'Too long!. Max is 50 characters').required('Required!'),
    cadre: yup.string().required('Required!'),
    professionalQualification: yup.string().min(4,'Too short!. Should be 4 or more characters.').max(50,'Too long!. Max is 50 characters').required('Required!'),
    durationYears: yup.number().min(1,'Too short!. Should be 1 or more years.').required('Required!'),
})

const editCourseSchema = yup.object().shape({
    name: yup.string().ensure().min(4,'Too short!. Should be 4 or more characters.').max(50,'Too long!. Max is 50 characters').required('Required!'),
    cadre: yup.string().ensure().required('Required!'),
    professionalQualification: yup.string().ensure().min(4,'Too short!. Should be 4 or more characters.').max(50,'Too long!. Max is 50 characters').required('Required!'),
    durationYears: yup.number().min(1,'Too short!. Should be 1 or more years.').required('Required!'),
})

const createContactSchema = yup.object().shape({
    phoneNumber: yup.string().matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Invalid Phone Number Format.').required('Required!')
})

export {
    createSchoolSchema,
    editSchoolSchema,
    createCourseSchema,
    editCourseSchema,
    createContactSchema
}