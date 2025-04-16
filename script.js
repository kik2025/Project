// Sample data
const studentData = [
    { id: 'S001', name: 'Emma Johnson', monday: '9:00-12:00', tuesday: '13:00-17:00', wednesday: '9:00-12:00', thursday: '13:00-17:00', friday: '9:00-12:00' },
    { id: 'S002', name: 'Luis Garcia', monday: '13:00-17:00', tuesday: '9:00-12:00', wednesday: '13:00-17:00', thursday: '9:00-12:00', friday: '13:00-17:00' },
    { id: 'S003', name: 'Mei Zhang', monday: '9:00-17:00', tuesday: '9:00-12:00', wednesday: 'Not Available', thursday: '13:00-17:00', friday: '9:00-17:00' },
    { id: 'S004', name: 'Ahmed Hassan', monday: '13:00-17:00', tuesday: '9:00-17:00', wednesday: '9:00-12:00', thursday: 'Not Available', friday: '13:00-17:00' },
    { id: 'S005', name: 'Sofia Patel', monday: '9:00-12:00', tuesday: 'Not Available', wednesday: '13:00-17:00', thursday: '9:00-17:00', friday: '9:00-12:00' }
];

const companyData = [
    { id: 'C001', name: 'TechInnovate', monday: '13:00-17:00', tuesday: '9:00-17:00', wednesday: 'Not Available', thursday: '9:00-12:00', friday: '13:00-17:00' },
    { id: 'C002', name: 'DataSolutions', monday: '9:00-12:00', tuesday: '13:00-17:00', wednesday: '9:00-12:00', thursday: '13:00-17:00', friday: 'Not Available' },
    { id: 'C003', name: 'GlobalAI', monday: 'Not Available', tuesday: '9:00-17:00', wednesday: '13:00-17:00', thursday: '9:00-12:00', friday: '9:00-17:00' }
];

const matchData = [
    { match_id: 'M001', student_id: 'S001', company_id: 'C001', match_score: 85, skills_match: 'Data Analysis;Python' },
    { match_id: 'M002', student_id: 'S002', company_id: 'C001', match_score: 78, skills_match: 'UX Research;JavaScript' },
    { match_id: 'M003', student_id: 'S003', company_id: 'C002', match_score: 92, skills_match: 'Machine Learning;Python' },
    { match_id: 'M004', student_id: 'S004', company_id: 'C003', match_score: 81, skills_match: 'Data Science;R' },
    { match_id: 'M005', student_id: 'S005', company_id: 'C002', match_score: 88, skills_match: 'Marketing Analytics;SQL' }
];

// Global variables
let currentStep = 1;
let schedule = [];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    populateStudentTable();
    populateCompanyTable();
    setupEventListeners();
});

// Populate student data table
function populateStudentTable() {
    const table = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    
    studentData.forEach(student => {
        const row = table.insertRow();
        row.insertCell(0).textContent = student.name;
        row.insertCell(1).textContent = student.monday;
        row.insertCell(2).textContent = student.tuesday;
        row.insertCell(3).textContent = student.wednesday;
        row.insertCell(4).textContent = student.thursday;
        row.insertCell(5).textContent = student.friday;
    });
}

// Populate company data table
function populateCompanyTable() {
    const table = document.getElementById('company-table').getElementsByTagName('tbody')[0];
    
    companyData.forEach(company => {
        const row = table.insertRow();
        row.insertCell(0).textContent = company.name;
        row.insertCell(1).textContent = company.monday;
        row.insertCell(2).textContent = company.tuesday;
        row.insertCell(3).textContent = company.wednesday;
        row.insertCell(4).textContent = company.thursday;
        row.insertCell(5).textContent = company.friday;
    });
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('process-data-btn').addEventListener('click', () => {
        goToStep(2);
        runMatchingProcess();
    });
    
    document.getElementById('schedule-btn').addEventListener('click', () => {
        goToStep(3);
        generateSchedule();
    });
    
    document.getElementById('notify-btn').addEventListener('click', () => {
        goToStep(4);
        generateEmails();
    });
    
    document.getElementById('restart-btn').addEventListener('click', () => {
        location.reload();
    });
}

// Navigate to specified step
function goToStep(stepNumber) {
    // Update active step
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step${stepNumber}`).classList.add('active');
    
    // Update active panel
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`panel${stepNumber}`).classList.add('active');
    
    currentStep = stepNumber;
}

// Simulate matching process with animation
function runMatchingProcess() {
    const progressBar = document.querySelector('.progress-bar');
    const matchingStatus = document.getElementById('matching-status');
    const scheduleBtn = document.getElementById('schedule-btn');
    const matchingResults = document.querySelector('.matching-results');
    
    // Reset progress
    progressBar.style.width = '0';
    
    // Animation steps
    setTimeout(() => {
        progressBar.style.width = '30%';
        matchingStatus.textContent = 'Processing student availability...';
    }, 800);
    
    setTimeout(() => {
        progressBar.style.width = '60%';
        matchingStatus.textContent = 'Processing company availability...';
    }, 1600);
    
    setTimeout(() => {
        progressBar.style.width = '85%';
        matchingStatus.textContent = 'Finding overlapping time slots...';
    }, 2400);
    
    setTimeout(() => {
        progressBar.style.width = '100%';
        matchingStatus.textContent = 'Matching complete!';
        scheduleBtn.disabled = false;
        matchingResults.style.display = 'block';
        populateAvailabilityResults();
    }, 3200);
}

// Populate availability results
function populateAvailabilityResults() {
    const resultsContainer = document.getElementById('availability-results');
    resultsContainer.innerHTML = '';
    
    // Simulate overlapping slots analysis
    const resultsHTML = `
        <p>Found 12 potential interview slots for 5 student-company matches.</p>
        <ul>
            <li>5 matches have at least one viable interview slot</li>
            <li>0 matches have scheduling conflicts</li>
            <li>3 students have multiple available slots with their matched companies</li>
        </ul>
        <p class="emphasized">Ready to generate optimal interview schedule.</p>
    `;
    
    resultsContainer.innerHTML = resultsHTML;
}

// Generate interview schedule
function generateSchedule() {
    // Process the schedule data (in a real application, this would use complex algorithms)
    schedule = [
        { id: 1, student_name: 'Emma Johnson', company_name: 'TechInnovate', day: 'Tuesday', start_time: '13:00', end_time: '13:30', skills: 'Data Analysis;Python' },
        { id: 2, student_name: 'Luis Garcia', company_name: 'TechInnovate', day: 'Monday', start_time: '13:00', end_time: '13:30', skills: 'UX Research;JavaScript' },
        { id: 3, student_name: 'Mei Zhang', company_name: 'DataSolutions', day: 'Monday', start_time: '09:00', end_time: '09:30', skills: 'Machine Learning;Python' },
        { id: 4, student_name: 'Ahmed Hassan', company_name: 'GlobalAI', day: 'Tuesday', start_time: '09:00', end_time: '09:30', skills: 'Data Science;R' },
        { id: 5, student_name: 'Sofia Patel', company_name: 'DataSolutions', day: 'Monday', start_time: '09:00', end_time: '09:30', skills: 'Marketing Analytics;SQL' }
    ];
    
    // Populate the schedule table
    const table = document.getElementById('schedule-table').getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    
    schedule.forEach(appointment => {
        const row = table.insertRow();
        row.insertCell(0).textContent = appointment.student_name;
        row.insertCell(1).textContent = appointment.company_name;
        row.insertCell(2).textContent = appointment.day;
        row.insertCell(3).textContent = `${appointment.start_time} - ${appointment.end_time}`;
        row.insertCell(4).textContent = appointment.skills;
    });
}

// Generate email notifications
function generateEmails() {
    // Just generate for the first scheduled interview
    if (schedule.length > 0) {
        const interview = schedule[0];
        
        // Student email
        document.getElementById('student-email-to').textContent = `${interview.student_name} <student@example.com>`;
        document.getElementById('student-email-company').textContent = interview.company_name;
        
        const studentEmailBody = `
            <p>Dear ${interview.student_name},</p>
            <p>We're excited to confirm your interview with ${interview.company_name} has been scheduled through the Go2Grow International Student Internship Program.</p>
            <p><strong>Interview Details:</strong></p>
            <ul>
                <li><strong>Date:</strong> ${interview.day}</li>
                <li><strong>Time:</strong> ${interview.start_time} - ${interview.end_time}</li>
                <li><strong>Format:</strong> Virtual (Zoom link will be provided)</li>
            </ul>
            <p>Your profile has been matched with ${interview.company_name} based on your skills in ${interview.skills.replace(';', ' and ')}.</p>
            <p>Please prepare by:</p>
            <ul>
                <li>Researching ${interview.company_name}</li>
                <li>Preparing examples of your experience with ${interview.skills.replace(';', ' and ')}</li>
                <li>Testing your video and audio setup before the interview</li>
            </ul>
            <p>If you need to reschedule, please contact us at least 24 hours before the scheduled time.</p>
            <p>Best of luck!</p>
            <p>The Go2Grow Team</p>
        `;
        document.getElementById('student-email-body').innerHTML = studentEmailBody;
        
        // Company email
        document.getElementById('company-email-to').textContent = `${interview.company_name} <hr@${interview.company_name.toLowerCase().replace(' ', '')}.com>`;
        document.getElementById('company-email-student').textContent = interview.student_name;
        
        const companyEmailBody = `
            <p>Dear ${interview.company_name} Hiring Team,</p>
            <p>We've scheduled an interview with ${interview.student_name}, an international student from our Go2Grow program.</p>
            <p><strong>Interview Details:</strong></p>
            <ul>
                <li><strong>Candidate:</strong> ${interview.student_name}</li>
                <li><strong>Date:</strong> ${interview.day}</li>
                <li><strong>Time:</strong> ${interview.start_time} - ${interview.end_time}</li>
                <li><strong>Format:</strong> Virtual (Zoom link will be provided)</li>
            </ul>
            <p>${interview.student_name} has been matched with your company based on their skills in ${interview.skills.replace(';', ' and ')}.</p>
            <p>Their full profile and CV are attached to this email. Please review before the interview.</p>
            <p>If you need to reschedule, please contact us at least 24 hours before the scheduled time.</p>
            <p>Thank you for partnering with Go2Grow to support international student talent!</p>
            <p>The Go2Grow Team</p>
        `;
        document.getElementById('company-email-body').innerHTML = companyEmailBody;
        
        // Stats
        const statsHTML = `
            <ul>
                <li><strong>Total Notifications Sent:</strong> 10 (5 students, 5 companies)</li>
                <li><strong>Delivery Rate:</strong> 100%</li>
                <li><strong>Average Process Time:</strong> 0.8 seconds per email</li>
                <li><strong>Automation Savings:</strong> Approximately 3 hours of manual work</li>
            </ul>
            <p class="emphasized">All notifications successfully sent and logged to the system.</p>
        `;
        document.getElementById('stats-content').innerHTML = statsHTML;
    }
}