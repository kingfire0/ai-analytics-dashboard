'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { useTheme } from 'next-themes'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [userName, setUserName] = useState('Admin User')
  const [email, setEmail] = useState('admin@admybrand.com')
  const [password, setPassword] = useState('')
  const [notifications, setNotifications] = useState(true)
  const [apiKey, setApiKey] = useState('')

  useEffect(() => {
    const savedName = localStorage.getItem('userName')
    const savedEmail = localStorage.getItem('email')
    const savedNotifications = localStorage.getItem('notifications') === 'true'
    if (savedName) setUserName(savedName)
    if (savedEmail) setEmail(savedEmail)
    setNotifications(savedNotifications)
  }, [])

  const generateApiKey = () => {
    const newKey = `api_${Math.random().toString(36).substr(2, 9)}`
    setApiKey(newKey)
  }

  const saveSettings = () => {
    localStorage.setItem('userName', userName)
    localStorage.setItem('email', email)
    localStorage.setItem('notifications', notifications.toString())
    alert('Settings saved successfully!')
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 p-8">
        <h1 className="text-3xl font-bold tracking-tight">⚙️ Settings</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="theme">Dark Mode</Label>
              <Switch
                id="theme"
                checked={theme === 'dark'}
                onCheckedChange={(checked: any) => setTheme(checked ? 'dark' : 'light')}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="password">New Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Enable Email Notifications</Label>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>API Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="apiKey">Your API Key</Label>
              <Input id="apiKey" value={apiKey} readOnly placeholder="Generate a key" />
            </div>
            <Button onClick={generateApiKey}>Generate New API Key</Button>
          </CardContent>
        </Card>
        
        <Button onClick={saveSettings} className="w-full">Save Changes</Button>
      </div>
    </DashboardLayout>
  )
}
